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
    subject!(:rpc_response) { ::Rpc::User::UserClient.new(conn).create(params) }

    it do
      expect(rpc_response.data.to_h).to match(
        id: Integer,
        name: String
      )
    end
  end
end
