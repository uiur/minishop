# encoding: utf-8

##
# This file is auto-generated. DO NOT EDIT!
#
require 'protobuf'
require 'protobuf/rpc/service'

module Hello_world
  ::Protobuf::Optionable.inject(self) { ::Google::Protobuf::FileOptions }

  ##
  # Message Classes
  #
  class HelloRequest < ::Protobuf::Message; end
  class HelloResponse < ::Protobuf::Message; end


  ##
  # Message Fields
  #
  class HelloRequest
    optional :string, :name, 1
  end

  class HelloResponse
    optional :string, :message, 1
  end


  ##
  # Service Classes
  #
  class HelloWorld < ::Protobuf::Rpc::Service
    rpc :hello, ::Hello_world::HelloRequest, ::Hello_world::HelloResponse
  end

end

