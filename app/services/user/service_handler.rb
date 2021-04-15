require 'protos/user/service_pb'
require 'protos/user/service_twirp'

class User
  class ServiceHandler
    def self.service
      ::UserService.new(self.new)
    end

    def create(req, env)
      user = User.create(req.to_h)

      UserResponse.new(user.as_json(only: [:id, :name]))
    end

    def show(req, env)
      user = User.find(req.id)
      UserResponse.new(user.as_json(only: [:id, :name]))
    end
  end
end
