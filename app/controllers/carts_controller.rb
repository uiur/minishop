class CartsController < ::Rpc::ApplicationController
  service ::Rpc::Order::CartService

  def update_product
    product = Product.find(rpc_request.product_id)
    order = Order.find(rpc_request.order_id)

    order_item = order.order_items.find_by(product_id: product.id)
    if rpc_request.quantity == 0
      if order_item
        order_item.destroy!
      end
    else
      if order_item
        order_item.update!(quantity: rpc_request.quantity)
      else
        order.order_items.create!(product_id: product.id, quantity: rpc_request.quantity)
      end
    end

    represent(order.reload)
  end

  private

  def represent(order)
    OrderResourceRepresenter.represent(order)
  end
end
