require 'rails_helper'

describe 'OrderService', type: :request do
  # todo: extract helpers
  let(:conn) do
    Faraday.new(url: 'http://example.com/twirp') do |conn|
      conn.adapter :rack, app
    end
  end

  describe 'show' do
    let!(:order) do
      Order.create!
    end


    describe 'found' do
      subject!(:rpc_response) { ::Rpc::Order::OrderClient.new(conn).show({ id: order.id }) }
      it do
        expect(rpc_response.data.to_h).to match(hash_including(
          id: String
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
