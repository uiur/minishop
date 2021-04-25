class OrderResponseRepresenter < BaseRepresenter
  schema Rpc::Order::OrderResponse
  field :order_items, representer: OrderItemRepresenter
end
