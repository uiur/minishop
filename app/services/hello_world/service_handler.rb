require 'protos/hello_world/service_pb'
require 'protos/hello_world/service_twirp'

module HelloWorld
  class ServiceHandler
    def self.service
      ::HelloWorld::HelloWorldService.new(self.new)
    end

    def hello(req, env)
      if req.name.empty?
        return Twirp::Error.invalid_argument("is mandatory", argument: "name")
      end

      HelloResponse.new({message: "Hello!!! #{req.name}"})
    end
  end
end
