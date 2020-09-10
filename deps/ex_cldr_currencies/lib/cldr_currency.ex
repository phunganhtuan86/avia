defmodule Cldr.Currency do
  @moduledoc """
  Defines a currency structure and a set of functions to manage the validity of a currency code
  and to return metadata for currencies.
  """

  alias Cldr.Locale
  alias Cldr.LanguageTag

  @type format ::
          :standard
          | :accounting
          | :short
          | :long
          | :percent
          | :scientific

  @type code :: String.t()

  @type t :: %__MODULE__{
          code: code,
          name: String.t(),
          tender: boolean,
          symbol: String.t(),
          digits: non_neg_integer,
          rounding: non_neg_integer,
          narrow_symbol: String.t(),
          cash_digits: non_neg_integer,
          cash_rounding: non_neg_integer,
          iso_digits: non_neg_integer,
          count: %{}
        }

  defstruct code: nil,
            name: "",
            symbol: "",
            narrow_symbol: nil,
            digits: 0,
            rounding: 0,
            cash_digits: 0,
            cash_rounding: 0,
            iso_digits: 0,
            tender: false,
            count: nil

  @doc """
  Returns a `Currency` struct created from the arguments.

  ## Options

  * `currency` is a custom currency code of a format defined in ISO4217

  * `options` is a map of options representing the optional elements of the `%Currency{}` struct

  ## Returns

  * `{:ok, Cldr.Currency.t}` or

  * `{:error, {exception, message}}`

  ## Example

      iex> Cldr.Currency.new(:XAA)
      {:ok,
       %Cldr.Currency{cash_digits: 0, cash_rounding: 0, code: :XAA, count: nil,
        digits: 0, name: "", narrow_symbol: nil, rounding: 0, symbol: "",
        tender: false}}

      iex> Cldr.Currency.new(:ZAA, name: "Invalid Custom Name")
      {:error, {Cldr.UnknownCurrencyError, "The currency :ZAA is invalid"}}

      iex> Cldr.Currency.new("xaa", name: "Custom Name")
      {:ok,
       %Cldr.Currency{cash_digits: 0, cash_rounding: 0, code: :XAA, count: nil,
        digits: 0, name: "Custom Name", narrow_symbol: nil, rounding: 0, symbol: "",
        tender: false}}

      iex> Cldr.Currency.new(:XAA, name: "Custom Name")
      {:ok,
       %Cldr.Currency{cash_digits: 0, cash_rounding: 0, code: :XAA, count: nil,
        digits: 0, name: "Custom Name", narrow_symbol: nil, rounding: 0, symbol: "",
        tender: false}}

      iex> Cldr.Currency.new(:XBC)
      {:error, {Cldr.CurrencyAlreadyDefined, "Currency :XBC is already defined"}}

  """
  @spec new(binary | atom, map | list) :: t | {:error, binary}
  def new(currency, options \\ [])

  def new(currency, options) do
    with {:ok, currency_code} <- Cldr.validate_currency(currency),
         false <- currency_code in known_currencies() do
      {:ok, struct(@struct, [{:code, currency_code} | options])}
    else
      true ->
        {
          :error,
          {Cldr.CurrencyAlreadyDefined, "Currency #{inspect(currency)} is already defined"}
        }

      error ->
        error
    end
  end

  @doc """
  Returns the appropriate currency display name for the `currency`, based
  on the plural rules in effect for the `locale`.

  ## Options

  * `number` is an integer, float or `Decimal`

  * `currency` is any currency returned by `Cldr.Currency.known_currencies/0`

  * `options` is a keyword list of options
    * `:locale` is any locale returned by `Cldr.Locale.new!/1`. The
    default is `Cldr.get_current_locale/0`

  ## Returns

  * `{:ok, plural_string}` or

  * `{:error, {exception, message}}`

  ## Examples

      iex> Cldr.Currency.pluralize 1, :USD
      {:ok, "US dollar"}

      iex> Cldr.Currency.pluralize 3, :USD
      {:ok, "US dollars"}

      iex> Cldr.Currency.pluralize 12, :USD, locale: "zh"
      {:ok, "美元"}

      iex> Cldr.Currency.pluralize 12, :USD, locale: "fr"
      {:ok, "dollars des États-Unis"}

      iex> Cldr.Currency.pluralize 1, :USD, locale: "fr"
      {:ok, "dollar des États-Unis"}

  """
  @spec pluralize(pos_integer, atom, Keyword.t()) ::
          {:ok, String.t()} | {:error, {Exception.t(), String.t()}}
  def pluralize(number, currency, options \\ []) do
    default_options = [locale: Cldr.get_current_locale()]
    options = Keyword.merge(default_options, options)
    locale = options[:locale]

    with {:ok, currency_code} <- Cldr.validate_currency(currency),
         {:ok, locale} <- Cldr.validate_locale(locale),
         {:ok, currency_data} <- currency_for_code(currency_code, locale) do
      counts = Map.get(currency_data, :count)
      {:ok, Cldr.Number.Cardinal.pluralize(number, locale, counts)}
    end
  end

  @doc """
  Returns a list of all known currency codes.

  ## Example

      iex> Cldr.Currency.known_currencies |> Enum.count
      301

  """
  @spec known_currencies() :: list(atom)
  def known_currencies do
    Cldr.known_currencies()
  end

  @doc """
  Returns a boolean indicating if the supplied currency code is known.

  ## Options

  * `currency_code` is a `binary` or `atom` representing an ISO4217
    currency code

  * `custom_currencies` is an optional list of custom currencies created by the
    `Cldr.Currency.new/2` function

  ## Returns

  * `true` or `false`

  ## Examples

      iex> Cldr.Currency.known_currency? "AUD"
      true

      iex> Cldr.Currency.known_currency? "GGG"
      false

      iex> Cldr.Currency.known_currency? :XCV
      false

      iex> Cldr.Currency.known_currency? :XCV, [%Cldr.Currency{code: :XCV}]
      true

  """
  @spec known_currency?(code, [t, ...]) :: boolean
  def known_currency?(currency_code, custom_currencies \\ []) do
    with {:ok, currency_code} <-  Cldr.validate_currency(currency_code),
          true <- currency_code in known_currencies() do
      true
    else
      {:error, _reason} -> Enum.any?(custom_currencies, &(currency_code == &1.code))
      false -> Enum.any?(custom_currencies, &(currency_code == &1.code))
    end
  end

  @doc """
  Returns a valid normalized ISO4217 format custom currency code or an error.

  Currency codes conform to the ISO4217 standard which means that any
  custom currency code must start with an "X" followed by two alphabetic
  characters.

  Note that since this function creates atoms but to a maximum of
  26 * 26 == 676 since the format permits 2 alphabetic characters only.

  ## Options

  * `currency_code` is a `String.t` or and `atom` representing the new
    currency code to be created

  ## Returns

  * `{:ok, currency_code}` or

  * `{:error, {exception, message}}`

  ## Examples

      iex> Cldr.Currency.make_currency_code("xzz")
      {:ok, :XZZ}

      iex> Cldr.Currency.make_currency_code("aaa")
      {:error, {Cldr.CurrencyCodeInvalid,
       "Invalid currency code \\"AAA\\".  Currency codes must start with 'X' followed by 2 alphabetic characters only."}}

  """
  @valid_currency_code Regex.compile!("^X[A-Z]{2}$")
  @spec make_currency_code(binary | atom) :: {:ok, atom} | {:error, binary}
  def make_currency_code(code) do
    currency_code =
      code
      |> to_string
      |> String.upcase()

    if String.match?(currency_code, @valid_currency_code) do
      {:ok, String.to_atom(currency_code)}
    else
      {
        :error,
        {
          Cldr.CurrencyCodeInvalid,
          "Invalid currency code #{inspect(currency_code)}.  " <>
            "Currency codes must start with 'X' followed by 2 alphabetic characters only."
        }
      }
    end
  end

  @doc """
  Returns the currency metadata for the requested currency code.

  ## Options

  * `currency_code` is a `binary` or `atom` representation of an
    ISO 4217 currency code.

  ## Examples

      iex> Cldr.Currency.currency_for_code("AUD")
      {:ok,
        %Cldr.Currency{
          cash_digits: 2,
          cash_rounding: 0,
          code: "AUD",
          count: %{one: "Australian dollar", other: "Australian dollars"},
          digits: 2,
          iso_digits: 2,
          name: "Australian Dollar",
          narrow_symbol: "$",
          rounding: 0,
          symbol: "A$",
          tender: true
      }}

      iex> Cldr.Currency.currency_for_code("THB")
      {:ok,
        %Cldr.Currency{
          cash_digits: 2,
          cash_rounding: 0,
          code: "THB",
          count: %{one: "Thai baht", other: "Thai baht"},
          digits: 2,
          iso_digits: 2,
          name: "Thai Baht",
          narrow_symbol: "฿",
          rounding: 0,
          symbol: "THB",
          tender: true
      }}

  """
  @spec currency_for_code(code, LanguageTag.t()) ::
          {:ok, t} | {:error, {Exception.t(), String.t()}}
  def currency_for_code(currency_code, locale \\ Cldr.get_current_locale()) do
    with {:ok, code} <- Cldr.validate_currency(currency_code),
         {:ok, locale} <- Cldr.validate_locale(locale),
         {:ok, currencies} <- currencies_for_locale(locale) do
      {:ok, get_currency_metadata(code, Map.get(currencies, code))}
    end
  end

  defp get_currency_metadata(code, nil) do
    string_code = to_string(code)
    {:ok, meta} = new(code, name: string_code, symbol: string_code, narrow_symbol: string_code, count: %{other: string_code})
    meta
  end

  defp get_currency_metadata(_code, meta) do
    meta
  end

  @doc """
  Returns the currency metadata for a locale.
  """
  @spec currencies_for_locale(Locale.name() | LanguageTag.t()) ::
          {:ok, Map.t()} | {:error, {Exception.t(), String.t()}}
  def currencies_for_locale(locale \\ Cldr.get_current_locale())

  for locale_name <- Cldr.Config.known_locale_names() do
    currencies =
      locale_name
      |> Cldr.Config.get_locale()
      |> Map.get(:currencies)
      |> Enum.map(fn {k, v} -> {k, struct(@struct, v)} end)
      |> Enum.into(%{})

    def currencies_for_locale(%LanguageTag{cldr_locale_name: unquote(locale_name)}) do
      {:ok, unquote(Macro.escape(currencies))}
    end
  end

  def currencies_for_locale(locale_name) when is_binary(locale_name) do
    case Locale.canonical_language_tag(locale_name) do
      {:ok, locale} -> currencies_for_locale(locale)
      {:error, reason} -> {:error, reason}
    end
  end

  def currencies_for_locale(locale) do
    {:error, Locale.locale_error(locale)}
  end
end
