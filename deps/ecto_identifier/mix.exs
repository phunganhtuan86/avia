defmodule EctoIdentifier.MixProject do
  use Mix.Project

  @version "0.1.0"

  def project do
    [
      app: :ecto_identifier,
      version: @version,
      elixir: "~> 1.5",
      start_permanent: Mix.env() == :prod,
      elixirc_paths: elixirc_paths(Mix.env()),
      source_url: "https://github.com/oyeb/ecto_identifier",
      description: description(),
      deps: deps(),
      package: package(),
      docs: docs(),
      deps: deps(),
      aliases: aliases(),
      test_coverage: [tool: ExCoveralls],
      preferred_cli_env: [coveralls: :test, "coveralls.json": :test, "coveralls.html": :test]
    ]
  end

  defp description do
    "Provides some custom Ecto types to manage autogenerated unique identifiers."
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:ecto, "~> 2.2"},
      {:nanoid, "~> 1.0"},
      {:credo, "~> 0.9", only: :dev, runtime: false},
      {:excoveralls, "~> 0.7", only: :test},
      {:postgrex, "~> 0.13", only: :test},
      {:ex_doc, "~> 0.18", only: :dev, runtime: false},
      {:git_hooks, "~> 0.2.0"}
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  defp package do
    [
      contributors: ["Ananya Bahadur"],
      maintainers: ["Ananya Bahadur"],
      licenses: ["Apache 2.0"],
      links: %{
        "GitHub" => "https://github.com/oyeb/ecto_identifier",
        "Readme" => "https://github.com/oyeb/ecto_identifier/blob/v#{@version}/README.md",
        "Changelog" => "https://github.com/oyeb/ecto_identifier/blob/v#{@version}/CHANGELOG.md"
      }
    ]
  end

  defp docs do
    [
      extras: ["README.md", "CHANGELOG.md"],
      main: "readme",
      source_ref: "v#{@version}"
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.setup": ["ecto.create", "ecto.migrate"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate", "test"]
    ]
  end
end