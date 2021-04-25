class OrderItemRepresenter < BaseRepresenter
  schema Rpc::Order::OrderItem
  field :product, representer: ProductResponseRepresenter
end
