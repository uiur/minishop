class OrderResourceRepresenter < BaseRepresenter
  schema Rpc::Order::OrderResource
  field :order_items, representer: OrderItemResourceRepresenter
end
