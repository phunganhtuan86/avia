import EctoEnum

# Creates a promotion rule enum.
# All the modules implementing the `PromotionRule` behaviour
# are enlisted here along with there representation in the db.
# 'Elixir' is pre-pended with each module name because all
# the module names are atoms and they are actually prepended with
# `Elixir` keyword to separate them from erlang atoms.
# Also, `ecto enum` doesn't support dot separated names in the list.
# So before adding the module name here pre-pend it with `Elixir`.
defenum(PromotionRuleEnum,
  "Elixir.Snitch.Data.Schema.PromotionRule.OrderTotal": 0,
  "Elixir.Snitch.Data.Schema.PromotionRule.Product": 1
)

defenum(PromotionActionEnum,
  "Elixir.Snitch.Data.Schema.PromotionAction.OrderAction": 0,
  "Elixir.Snitch.Data.Schema.PromotionAction.LineItemAction": 1
)

# The below enum is only for handling casting and listing purpose at present.
# Since they are being used in embedded schemas at present actual
# model names are stored.
# TODO look for a way to handle enums in embedded schemas.
defenum(ActionCalculators,
  "Elixir.Snitch.Domain.Calculator.FlatRate": 0,
  "Elixir.Snitch.Domain.Calculator.FlatPercent": 1
)
