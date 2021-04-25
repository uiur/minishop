# Code generated by protoc-gen-twirp_ruby 1.6.0, DO NOT EDIT.
require 'twirp'
require_relative 'cart_service_pb.rb'

module Rpc
  module Order
    class CartService < Twirp::Service
      package 'rpc.order'
      service 'Cart'
      rpc :UpdateProduct, Rpc::Order::UpdateProductRequest, Rpc::Order::OrderResource, :ruby_method => :update_product
    end

    class CartClient < Twirp::Client
      client_for CartService
    end
  end
end