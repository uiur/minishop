require 'rails_helper'

describe 'orders', type: :request do
  # todo: extract helpers
  let(:conn) do
    Faraday.new(url: 'http://example.com/twirp') do |conn|
      conn.adapter :rack, app
    end
  end

  describe 'OrderService.show' do
    let!(:order) do
      Order.create!
    end

    subject!(:rpc_response) { ::Rpc::Order::OrderClient.new(conn).show({ id: order.id }) }

    it do
      pp rpc_response.data
    end
  end

end
