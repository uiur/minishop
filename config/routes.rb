# Dir[Rails.root.join('lib', 'rpc', '**', '*.rb')].sort.each { |f| require f }

Rails.application.routes.draw do
  def rpc(service)
    service.rpcs.each do |name, _|
      post "/twirp/#{service.service_full_name}/#{name}", controller: service.service_full_name.split('.')[-1].downcase.pluralize, action: name.downcase, format: false
    end
  end

  [
    ::Rpc::User::UserService,
    ::Rpc::Product::ProductService
  ].each do |service|
    rpc service
  end
end
