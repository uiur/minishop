class ProductsResponseRepresenter < BaseRepresenter
  schema Rpc::Product::ProductsResponse
  field :products, representer: ProductResponseRepresenter
end
