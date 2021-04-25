class OrdersController < ::Rpc::ApplicationController
  service ::Rpc::Order::OrderService

  def show
    order = Order.find(rpc_request.id)
    represent(order)
  end

  private

  def represent(product)
    OrderResponseRepresenter.represent(product)
  end
end
