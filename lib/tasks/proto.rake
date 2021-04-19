# frozen_string_literal: true

namespace :proto do
  desc "Compile proto definitions"
  task :compile do
    def system!(*args)
      puts(args.join(' '))
      system(*args) || abort("\n== Command #{args} failed ==")
    end

    proto_dir = Rails.root.join('lib', 'protos')
    proto_path = Rails.root.join(proto_dir, '**', '*.proto').to_s
    proto_service_path = Rails.root.join(proto_dir, '**', '*_service.proto').to_s
    gen_dir = Rails.root.join('lib', 'gens')

    FileUtils.rm_f(Dir[Rails.root.join(gen_dir, '**', '*.rb').to_s])
    system!('protoc', "--proto_path=#{proto_dir}", "--ruby_out=#{gen_dir}", *Dir[proto_path])
    system!('protoc', "--proto_path=#{proto_dir}", "--twirp_ruby_out=#{gen_dir}", *Dir[proto_service_path])
  end
end