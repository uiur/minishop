class ProductsController < ::Rpc::ApplicationController
  service ::Rpc::Product::ProductService

  def index
    products = Product.all.order(:created_at)
    ProductsResponseRepresenter.new(OpenStruct.new(products: products)).serializable_hash
  end

  def show
    product = Product.find(rpc_request.id)
    represent(product)
  end

  private

  def represent(product)
    ProductResponseRepresenter.new(product).serializable_hash
  end
end
