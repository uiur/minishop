require 'rails_helper'

describe ::Rpc::Order::CartService, type: :request do
  let(:client) { ::Rpc::Order::CartClient.new(conn) }

  describe 'UpdateProduct' do
    let(:product) { create(:product) }
    let(:order) { create(:order) }

    subject!(:rpc_response) do
      client.update_product({ order_id: order.id, product_id: product.id, quantity: 2 })
    end

    it do
      expect(order.order_items.first).to have_attributes(product_id: product.id)
    end
  end

  describe 'UpdateShippingAddress' do
    let(:order) { create(:order) }
    let(:shipping_address_params) do
      {
        address1: 'Meguro-ku',
        address2: '',
        city: 'Tokyo',
        country: 'Japan',
        name: 'Tom Cruise',
        phone: '09012341234',
        zip: '1230001'
      }
    end

    let(:params) do
      {
        order_id: order.id,
        shipping_address: shipping_address_params
      }
    end

    subject(:rpc_response) do
      client.update_shipping_address(params)
    end

    describe 'shipping_address does not exist yet' do
      it 'sets shipping address to order' do
        expect(rpc_response.error).not_to be_present
        expect(rpc_response.data.to_h).to match(hash_including(
          shipping_address: hash_including(id: be_present)
        ))

        order.reload
        expect(order.shipping_address).to be_present
      end
    end

    describe 'shipping_address already exist' do
      let(:shipping_address) { create(:shipping_address, city: 'Osaka') }
      before { order.update!(shipping_address: shipping_address) }

      it 'updates shipping address' do
        expect(order.shipping_address).to have_attributes(
          city: 'Osaka'
        )

        subject
        expect(rpc_response.error).not_to be_present
        expect(rpc_response.data.to_h).to match(hash_including(
          shipping_address: hash_including(id: be_present)
        ))

        order.reload
        expect(order).to have_attributes(
          shipping_address_id: String
        )
        expect(order.shipping_address).to have_attributes(
          city: 'Tokyo'
        )
      end
    end

    describe 'invalid arguments' do
      let(:shipping_address_params) do
        {
          name: 'tom cruise',
          city: nil,
          country: 'Japan'
        }
      end

      it do
        expect(rpc_response.error).to have_attributes(code: :invalid_argument)
      end
    end
  end

  describe 'Complete' do
    let(:order) { create(:order, shipping_address: shipping_address) }
    let(:shipping_address) { create(:shipping_address) }

    subject!(:rpc_response) do
      client.complete({ order_id: order.id })
    end

    context 'valid' do
      let!(:order_item) { create(:order_item, order: order) }

      it 'updates status to ordered' do
        expect(rpc_response.data.to_h).to match(hash_including(
          status: :ORDERED
        ))

        order.reload
        expect(order).to have_attributes(status: 'ordered')
      end
    end

    context 'invalid' do
      it 'returns error' do
        expect(rpc_response.error).to have_attributes(
          code: :invalid_argument
        )

        order.reload
        expect(order).to have_attributes(status: 'cart')
      end

    end
  end
end
