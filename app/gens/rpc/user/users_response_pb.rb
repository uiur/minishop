# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: rpc/user/users_response.proto

require 'google/protobuf'

require 'rpc/user/user_response_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("rpc/user/users_response.proto", :syntax => :proto3) do
    add_message "rpc.user.UsersResponse" do
      repeated :users, :message, 1, "rpc.user.UserResponse"
      optional :user, :message, 2, "rpc.user.UserResponse"
    end
  end
end

module Rpc
  module User
    UsersResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("rpc.user.UsersResponse").msgclass
  end
end