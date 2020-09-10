# Recase

![Recase](https://raw.githubusercontent.com/sobolevn/recase/master/media/logo.png)

[![Build Status](https://travis-ci.org/sobolevn/recase.svg?branch=master)](https://travis-ci.org/sobolevn/recase) [![Coverage Status](https://coveralls.io/repos/github/sobolevn/recase/badge.svg?branch=master)](https://coveralls.io/github/sobolevn/recase?branch=master) [![Hex Version](https://img.shields.io/hexpm/v/recase.svg)](https://hex.pm/packages/recase) [![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

`Recase` helps you to convert a string from any case to any case.


## Why?

One can ask: "Why should I use `recase` when I can use built-in `Macro` module?". But, you have to keep in mind that `Macro`'s functions are [not suitable](https://github.com/elixir-lang/elixir/blob/4aa81645b0588b56fb61cd154dcaee354732aa5c/lib/elixir/lib/macro.ex#L1265) for general case usage:

> Do not use it as a general mechanism for underscoring or camelizing strings as it does not support Unicode or characters that are not valid in Elixir identifiers.


## Installation

```elixir
def deps do
  [{:recase, "~> 0.2"}]
end
```


## Usage

### Pascal

Pascal (or Upper) case uses mixed case with lower and upper cased characters. Separates words from each other with the upper case letters. Starts with upper case letter.

```elixir
Recase.to_pascal("some-value") # => "SomeValue"
Recase.to_pascal("Some value") # => "SomeValue"
```

### Camel

Camel case uses mixed case with lower and upper cased characters. Separates words from each other with the upper cased letters. Starts with lower case letter.

```elixir
Recase.to_camel("some-value") # => "someValue"
Recase.to_camel("Some Value") # => "someValue"
```

### Snake

Snake cases uses all lower case. Uses `_` as a separator.

```elixir
Recase.to_snake("someValue") # => "some_value"
Recase.to_snake("Some Value") # => "some_value"
```

### Kebab

Kebab cases uses all lower case. Uses `-` as a separator.

```elixir
Recase.to_kebab("someValue") # => "some-value"
Recase.to_kebab("Some Value") # => "some-value"
```

### Constant

Constant case uses all upper case. Uses `_` as a separator.

```elixir
Recase.to_constant("SomeValue") # => "SOME_VALUE"
Recase.to_constant("some value") # => "SOME_VALUE"
```

### Dot

Dot case uses all lower case similar to snake case. Uses `.` as a separator.

```elixir
Recase.to_dot("SomeValue") # => "some.value"
Recase.to_dot("some value") # => "some.value"
```

### Path

Path case preserves case, you can also provide a separator as the second argument.

```elixir
Recase.to_path("SomeValue") # => "Some/Value"
Recase.to_path("some value", "\\") # => "some\\value"
```


## Changelog

Full changelog is available [here](https://github.com/sobolevn/recase/blob/master/CHANGELOG.md).


## License

MIT. See [LICENSE.md](https://github.com/sobolevn/recase/blob/master/LICENSE.md) for more details.


## Thanks

Thanks to [Gyan Lakhwani](https://github.com/gyanl) for the logo.
