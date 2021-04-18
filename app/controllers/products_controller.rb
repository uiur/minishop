class ProductsController < ::Rpc::ApplicationController
  service ::ProductService

  def index
    products = Product.all.order(:created_at)

    {
      products: products.map { |product|
        product.as_json(only: [:id, :name, :price, :image_url])
      }
    }
  end

  def show
    product = Product.find(rpc_request.id)
    product.as_json(only: [:id, :name])
  end
end
