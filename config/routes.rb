# Dir[Rails.root.join('lib', 'proto_gens', '**', '*.rb')].sort.each { |f| require f }

Rails.application.routes.draw do
  def rpc(service)
    service.rpcs.each do |name, _|
      post "/twirp/#{service.service_full_name}/#{name}", controller: service.service_full_name.downcase.pluralize, action: name.downcase, format: false
    end
  end

  [::UserService, ::ProductService].each do |service|
    rpc service
  end
end
