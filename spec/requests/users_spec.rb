require 'rails_helper'

describe 'users', type: :request do
  # let(:service) { ::UserService.new(UsersController.new) }

  # describe 'UserService.create' do
  #   let(:params) { { name: 'foobar' } }
  #   subject { service.call_rpc(:Create, params) }

  #   it do
  #     res = subject
  #     expect(res.to_h).to match(
  #       id: Integer,
  #       name: String
  #     )
  #   end
  # end

  describe 'UserService.create' do
    let(:params) { { name: 'foobar' } }
    subject(:submit_request) { post '/twirp/User/Create', params: params, as: :json }

    it do
      submit_request
      res = Twirp::Encoding.decode(response.body, Rpc::User::UserResponse, Twirp::Encoding::JSON)
      expect(res.to_h).to match(
        id: Integer,
        name: String
      )
    end
  end
end
