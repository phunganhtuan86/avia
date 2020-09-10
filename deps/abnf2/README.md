# Abnf2

An ABNF parser generator

This version is a maintenance version from the now non-active [ABNF](https://hex.pm/packages/abnf) developed by [@vanstee](https://hex.pm/users/vanstee)

This version also relaxes the rules regarding ABNF file formats.  The RFC requires that lines be separated by `\r\n`.  This version also allows `\n` as an alternative in line with unix norms.

For an example of its usage in the wild, see the package [ex_cldr](https://hex.pm/packages/ex_cldr); in particular the modules `Cldr.Locale` and `Cldr.LanguageTag.Parser`.

## Example

```elixir
iex(1)> parser = Abnf.load("priv/rfc5234.abnf")
Rfc5234
iex(2)> parser.parse(:rule, "DQUOTE = %x22\r\n")
[{:rule, "DQUOTE = %x22\r\n",
  [{:rulename, "DQUOTE",
    [{:ALPHA, "D", [{:literal, "D", []}]}, {:ALPHA, "Q", [{:literal, "Q", []}]},
     {:ALPHA, "U", [{:literal, "U", []}]}, {:ALPHA, "O", [{:literal, "O", []}]},
     {:ALPHA, "T", [{:literal, "T", []}]},
     {:ALPHA, "E", [{:literal, "E", []}]}]},
   {:"defined-as", " = ",
    [{:"c-wsp", " ", [{:WSP, " ", [{:SP, " ", [{:literal, " ", []}]}]}]},
     {:literal, "=", []},
     {:"c-wsp", " ", [{:WSP, " ", [{:SP, " ", [{:literal, " ", []}]}]}]}]},
   {:elements, "%x22",
    [{:alternation, "%x22",
      [{:concatenation, "%x22",
        [{:repetition, "%x22",
          [{:element, "%x22",
            [{:"num-val", "%x22",
              [{:literal, "%", []},
               {:"hex-val", "x22",
                [{:literal, "x", []},
                 {:HEXDIG, "2", [{:DIGIT, "2", [{:literal, "2", []}]}]},
                 {:HEXDIG, "2",
                  [{:DIGIT, "2", [{:literal, "2", []}]}]}]}]}]}]}]}]}]},
   {:"c-nl", "\r\n",
    [{:CRLF, "\r\n",
      [{:CR, "\r", [{:literal, "\r", []}]},
       {:LF, "\n", [{:literal, "\n", []}]}]}]}]}]
```

## TODO

- [ ] Improve test coverage
- [ ] Log error messages during parsing
- [ ] Improve UX of parsing for specific rules
- [ ] Improve documentation

## Installation

The package can be installed by:

  1. Adding abnf2 to your list of dependencies in `mix.exs`:

        def deps do
          [{:abnf2, "~> 0.1.0"}]
        end

