class ProductsController < ::Rpc::ApplicationController
  service ::ProductService

  def index
    products = Product.all.order(:created_at)

    {
      products: products.map { |product|
        serialize(product)
      }
    }
  end

  def show
    product = Product.find(rpc_request.id)
    serialize(product)
  end

  private

  def serialize(product)
    seconds = product
    {
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      created_at: serialize_time(product.created_at)
    }

  end

  def serialize_time(time)
    require 'google/protobuf/well_known_types'
    t = Google::Protobuf::Timestamp.new
    t.from_time(time)
    t
  end
end
