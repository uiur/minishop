class OrderItemResourceRepresenter < BaseRepresenter
  schema Rpc::Order::OrderItemResource
  field :product, representer: ProductResponseRepresenter
end
