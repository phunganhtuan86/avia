defmodule Swoosh.Attachment do
  @moduledoc """
  Struct representing an attachment in an email.
  """

  defstruct filename: nil, content_type: nil, path: nil, data: nil, type: :attachment, headers: []

  @type t :: %__MODULE__{
          filename: String.t(),
          content_type: String.t(),
          path: String.t() | nil,
          data: binary | nil,
          type: :inline | :attachment,
          headers: [{String.t(), String.t()}]
        }

  @doc ~S"""
  Creates a new Attachment

  Examples:

      Attachment.new("/path/to/attachment.png")
      Attachment.new("/path/to/attachment.png", filename: "image.png")
      Attachment.new("/path/to/attachment.png", filename: "image.png", content_type: "image/png")
      Attachment.new(params["file"]) # Where params["file"] is a %Plug.Upload

  Examples with inline-attachments:

      Attachment.new("/path/to/attachment.png", type: :inline)
      Attachment.new("/path/to/attachment.png", filename: "image.png", type: :inline)
      Attachment.new("/path/to/attachment.png", filename: "image.png", content_type: "image/png", type: :inline)
      Attachment.new(params["file"], type: "inline") # Where params["file"] is a %Plug.Upload

  """
  @spec new(binary | struct, Keyword.t() | map) :: %__MODULE__{}
  def new(path, opts \\ [])

  if Code.ensure_loaded?(Plug) do
    def new(
          %Plug.Upload{
            filename: filename,
            content_type: content_type,
            path: path
          },
          opts
        ) do
      new(
        path,
        Keyword.merge(
          [filename: filename, content_type: content_type],
          opts
        )
      )
    end
  end

  def new({:data, data}, opts) do
    %{struct!(__MODULE__, opts) | data: data}
  end

  def new(path, opts) do
    attachment = struct!(__MODULE__, opts)

    %{
      attachment
      | path: path,
        filename: attachment.filename || Path.basename(path),
        content_type: attachment.content_type || MIME.from_path(path)
    }
  end

  @type content_encoding :: :raw | :base64
  @spec get_content(%__MODULE__{}, content_encoding) :: binary | no_return
  def get_content(%__MODULE__{data: nil, path: nil}) do
    raise Swoosh.AttachmentContentError, message: "No path or data is provided"
  end

  def get_content(%__MODULE__{data: data, path: path}, encoding \\ :raw) do
    encode(data || File.read!(path), encoding)
  end

  defp encode(content, :raw), do: content
  defp encode(content, :base64), do: Base.encode64(content)
end
