# Code generated by protoc-gen-twirp_ruby 1.6.0, DO NOT EDIT.
require 'twirp'
require_relative 'product_service_pb.rb'

module Rpc
  module Product
    class ProductService < Twirp::Service
      package 'rpc.product'
      service 'Product'
      rpc :Show, Rpc::Product::ShowRequest, Rpc::Product::ProductResponse, :ruby_method => :show
      rpc :Index, Google::Protobuf::Empty, Rpc::Product::ProductsResponse, :ruby_method => :index
    end

    class ProductClient < Twirp::Client
      client_for ProductService
    end
  end
end