class OrdersController < ::Rpc::ApplicationController
  service ::Rpc::Order::OrderService

  def show
    order = Order.find(rpc_request.id)
    represent(order)
  end

  def create
    order = Order.create!
    represent(order)
  end

  private

  def represent(product)
    OrderResourceRepresenter.represent(product)
  end
end
