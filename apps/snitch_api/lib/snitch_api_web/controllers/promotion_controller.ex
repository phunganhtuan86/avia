defmodule SnitchApiWeb.PromotionController do
  use SnitchApiWeb, :controller

  alias Snitch.Data.Model.Order
  alias Snitch.Data.Schema.Order, as: OrderSchema
  alias Snitch.Data.Model.Promotion

  def apply(conn, %{"order_number" => order_number, "promo_code" => promo_code}) do
    with {:ok, %OrderSchema{} = order} <- Order.get(%{number: order_number}),
         {:ok, message} <- Promotion.apply(order, promo_code) do
      render(conn, "success.json-api", %{message: message})
    else
      {:error, message} ->
        render(conn, "error.json-api", %{message: message})
    end
  end
end
