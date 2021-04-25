# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc/order/order_resource.proto

require 'google/protobuf'

require 'rpc/order/order_item_resource_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("rpc/order/order_resource.proto", :syntax => :proto3) do
    add_message "rpc.order.OrderResource" do
      optional :id, :string, 1
      optional :status, :enum, 2, "rpc.order.OrderResource.Status"
      repeated :order_items, :message, 3, "rpc.order.OrderItemResource"
    end
    add_enum "rpc.order.OrderResource.Status" do
      value :CART, 0
      value :ORDEDED, 1
    end
  end
end

module Rpc
  module Order
    OrderResource = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("rpc.order.OrderResource").msgclass
    OrderResource::Status = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("rpc.order.OrderResource.Status").enummodule
  end
end
