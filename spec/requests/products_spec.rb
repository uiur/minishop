require 'rails_helper'

describe 'products', type: :request do
  describe 'ProductService.index' do
    let!(:product) do
      Product.create!(name: 'test', price: 100)
    end

    let(:conn) do
      Faraday.new(url: 'http://example.com/twirp') do |conn|
        conn.adapter :rack, app
      end
    end

    subject(:rpc_response) { ProductClient.new(conn).index({}) }

    it do
      expect(rpc_response.data.to_h).to match(
        products: [
          hash_including(
            name: product.name,
          )
        ]
      )

      product_response = rpc_response.data.products.first
      expect(product_response).to have_attributes(
        created_at: Google::Protobuf::Timestamp
      )
    end
  end
end
