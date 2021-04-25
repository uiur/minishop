require 'rails_helper'

describe 'OrderService', type: :request do
  describe 'show' do
    let!(:product) { create(:product) }
    let!(:order) do
      Order.create!
    end
    let!(:order_item) { OrderItem.create!(order: order, product: product, quantity: 2) }

    describe 'found' do
      subject!(:rpc_response) { ::Rpc::Order::OrderClient.new(conn).show({ id: order.id }) }
      it do
        pp rpc_response.data.to_h
        expect(rpc_response.data.to_h).to match(hash_including(
          id: String,
          order_items: [
            hash_including(id: String, product: Hash)
          ]
        ))
      end
    end

    describe 'not found' do
      subject!(:rpc_response) { ::Rpc::Order::OrderClient.new(conn).show({ id: SecureRandom.uuid }) }

      it do
        expect(rpc_response.error.code).to eq(:not_found)
      end
    end
  end

  describe 'create' do
    subject!(:rpc_response) { ::Rpc::Order::OrderClient.new(conn).create({}) }

    it do
      expect(rpc_response.data.to_h).to match(hash_including(
        id: String
      ))
    end
  end
end
