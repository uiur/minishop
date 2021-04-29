class OrderResourceRepresenter < BaseRepresenter
  schema Rpc::Order::OrderResource
  field :order_items, representer: OrderItemResourceRepresenter
  field :shipping_address, representer: ShippingAddressResourceRepresenter
end
