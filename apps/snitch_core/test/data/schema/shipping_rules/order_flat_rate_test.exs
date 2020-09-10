defmodule Snitch.Data.Schema.ShippingRule.OrderFlatRateTest do
  use ExUnit.Case, async: true
  use Snitch.DataCase
  import Snitch.Factory
  alias Snitch.Core.Tools.MultiTenancy.Repo
  alias Snitch.Data.Schema.ShippingRule
  alias Snitch.Data.Schema.ShippingRule.OrderFlatRate

  @params %{
    preferences: %{cost: 0.00},
    active?: false
  }

  describe "create shipping rule type 'fixed shipping rate for order'" do
    test "successfully" do
      shipping_category = insert(:shipping_category)

      shipping_identifier =
        insert(:shipping_identifier, code: :ofr, description: "fixed shipping rate for order")

      params =
        @params
        |> Map.put(:shipping_category_id, shipping_category.id)
        |> Map.put(:shipping_rule_identifier_id, shipping_identifier.id)

      changeset = ShippingRule.changeset(%ShippingRule{}, params)
      assert {:ok, _data} = Repo.insert(changeset)
    end

    test "fails for invalid cost" do
      shipping_category = insert(:shipping_category)

      shipping_identifier =
        insert(:shipping_identifier, code: :ofr, description: "fixed shipping rate for order")

      params =
        @params
        |> Map.put(:shipping_category_id, shipping_category.id)
        |> Map.put(:shipping_rule_identifier_id, shipping_identifier.id)
        |> Map.put(:preferences, %{cost: "abc"})

      changeset = ShippingRule.changeset(%ShippingRule{}, params)
      assert {:error, changeset} = Repo.insert(changeset)
      assert %{preferences: ["cost is invalid. "]} = errors_on(changeset)
    end
  end

  describe "calculate/3" do
    setup :zones
    setup :shipping_methods
    setup :embedded_shipping_methods

    test "returns {:cont, cost} for rule", context do
      rule_manifest = %{code: :ofr, description: "fixed shipping rate for order"}
      preference_manifest = %{cost: Decimal.new(20.00)}
      item_info = %{unit_price: Money.new!(currency(), 10), quantity: 3}

      %{package: package, rule: rule} =
        package_with_shipping_rule(context, item_info, rule_manifest, preference_manifest)

      assert {:cont, shipping_cost} =
               OrderFlatRate.calculate(package, currency(), rule, Money.new!(currency(), 0))

      # since item_info.unit_price * item_info.quantity > preference_manifest.cost
      # shippping_cost is equal to preference_manifest.cost
      assert shipping_cost == Money.new!(currency(), preference_manifest.cost)
    end
  end

  test "identifier is :ofr" do
    assert :ofr == OrderFlatRate.identifier()
  end
end
