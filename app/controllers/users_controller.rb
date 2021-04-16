
class UsersController < ::Rpc::ApplicationController
  service ::UserService

  def create
    user = User.create(rpc_request.to_h)
    user.as_json(only: [:id, :name])
  end

  def index
    users = User.all
    {
      users: users.map { |user|
        user.as_json(only: [:id, :name])
      }
    }
  end

  def show
    user = User.find(rpc_request.id)
    user.as_json(only: [:id, :name])
  end
end
