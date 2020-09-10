defmodule Exyz.Mixfile do
  use Mix.Project

  def project do
    [app: :exyz,
     version: "1.0.0",
     elixir: "~> 1.0",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     description: description,
     package: package,
     deps: deps]
  end

  def application do
    [applications: [:logger]]
  end

  defp package do
    [contributors: ["Dylan Kendal"],
     licenses: ["This work is public domain"],
     links: %{"GitHub" => "https://github.com/Dkendal/exyz"}]
  end

  defp description do
    "Z-combinator in elixir: recursive anonymous functions."
  end

  defp deps do
    []
  end
end
