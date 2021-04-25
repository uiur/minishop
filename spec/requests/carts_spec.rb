require 'rails_helper'

describe 'CartService', type: :request do
  describe 'updateProduct' do
    let(:product) { create(:product) }
    let(:order) { create(:order) }
    let(:client) { ::Rpc::Order::CartClient.new(conn) }

    subject!(:rpc_response) do
      client.update_product({ order_id: order.id, product_id: product.id, quantity: 2 })
    end

    it do
      expect(order.order_items.first).to have_attributes(product_id: product.id)
    end
  end
end
