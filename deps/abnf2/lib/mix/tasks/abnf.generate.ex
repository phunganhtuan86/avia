defmodule Mix.Tasks.Abnf.Generate do
  @moduledoc """
  Mix task to generate an ABNF parser.
  """

  use Mix.Task

  @shortdoc "Generate an ABNF parser module from an ABNF source file"

  def run([src, dest]) do
    src
    |> Abnf.compile
    |> write_code(src, dest, nil)
  end

  def run([src, dest, name]) do
    module_name = ensure_module_name(name)

    src
    |> Abnf.compile(module_name)
    |> write_code(src, dest, module_name)
  end

  defp write_code(quoted_module, src, dest, module_name) do
    module_code = Macro.to_string(quoted_module)
    File.write!(dest, generated_comment(src, dest, module_name) <> module_code)
    IO.puts("Generated #{dest}")
  end

  defp generated_comment(src, dest, nil) do
    "# WARNING: This file was generated with by following command:\n" <>
    "# mix abnf.generate #{src} #{dest}\n\n"
  end

  defp generated_comment(src, dest, module_name) do
    module_name =
      module_name
      |> Atom.to_string
      |> String.trim_leading("Elixir.")

      "# WARNING: This file was generated with by following command:\n" <>
      "# mix abnf.generate #{src} #{dest} #{module_name}\n\n"
  end

  defp ensure_module_name(name) when is_atom(name) do
    name
  end

  defp ensure_module_name(name) when is_binary(name) do
    module_name = cond do
      String.starts_with?(name, "Elixir.") ->
        name
      true ->
        Enum.join(["Elixir", name], ".")
    end

    String.to_atom(module_name)
  end
end
