# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: users_response.proto

require 'google/protobuf'

require 'user_response_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("users_response.proto", :syntax => :proto3) do
    add_message "UsersResponse" do
      repeated :users, :message, 1, "UserResponse"
    end
  end
end

UsersResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("UsersResponse").msgclass
