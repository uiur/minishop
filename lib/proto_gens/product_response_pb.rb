# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: product_response.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("product_response.proto", :syntax => :proto3) do
    add_message "ProductResponse" do
      optional :id, :string, 1
      optional :name, :string, 2
      optional :price, :int32, 3
      optional :image_url, :string, 4
      optional :created_at, :message, 5, "google.protobuf.Timestamp"
    end
  end
end

ProductResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("ProductResponse").msgclass
