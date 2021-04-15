require 'protos/user/service_pb'
require 'protos/user/service_twirp'

class UsersController < ::Rpc::ApplicationController
  service ::UserService

  def create
    user = User.create(rpc_request.to_h)
    user.as_json(only: [:id, :name])
  end

  def show
    user = User.find(req.id)
    user.as_json(only: [:id, :name])
  end
end
