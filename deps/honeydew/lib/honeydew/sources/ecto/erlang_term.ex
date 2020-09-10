if Code.ensure_loaded?(Ecto) do
  defmodule Honeydew.EctoSource.ErlangTerm do
    @behaviour Ecto.Type

    @impl true
    def type, do: :binary

    @impl true
    def cast(term) do
      {:ok, term}
    end

    @impl true
    def load(binary) when is_binary(binary) do
      {:ok, :erlang.binary_to_term(binary)}
    end

    @impl true
    def dump(term) do
      {:ok, :erlang.term_to_binary(term)}
    end
  end
end
