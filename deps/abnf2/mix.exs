defmodule Abnf.Mixfile do
  use Mix.Project

  @version "0.1.4"

  def project do
    [
       app: :abnf2,
       version: @version,
       elixir: "~> 1.5",
       name: "abnf2",
       source_url: "https://github.com/kipcole9/abnf",
       description: description(),
       build_embedded: Mix.env == :prod,
       start_permanent: Mix.env == :prod,
       deps: deps(),
       aliases: aliases(),
       package: package()
    ]
  end

  defp description do
    """
    An ABNF parser generator updated from the original developed by @vanstee.
    """
  end

  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:ex_doc, "~> 0.18 or ~> 0.19.0-rc", only: :dev}
    ]
  end

  defp package do
    [
      maintainers: ["Kip Cole"],
      licenses: ["MIT"],
      files: ["lib", "priv", "mix.exs", "README.md"],
      links: %{
        "GitHub" => "https://github.com/kipcole9/abnf",
        "Original" => "https://github.com/vansee/abnf"
      }
    ]
  end

  defp aliases do
    [
      generate: "abnf.generate",
      "generate.core": &generate_core/1,
      "generate.rfc5234": &generate_rfc5234/1
    ]
  end

  defp generate_core(_) do
    Mix.Task.run("abnf.generate", ["priv/core.abnf", "lib/abnf/core.ex", "Abnf.Core"])
  end

  defp generate_rfc5234(_) do
    Mix.Task.run("abnf.generate", ["priv/rfc5234.abnf", "lib/abnf/rfc5234.ex", "Abnf.Rfc5234"])
  end
end
