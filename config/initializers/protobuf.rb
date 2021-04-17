Google::Protobuf::DescriptorPool.class_eval do
  class <<self
    def generated_pool
      @generated_pool ||= new
    end

    def generated_pool=(pool)
      @generated_pool = pool
    end
  end
end

Rails.application.reloader.before_class_unload do
  Google::Protobuf::DescriptorPool.generated_pool = nil
end

def system!(*args)
  Rails.logger.debug([Time.current.iso8601] + args)
  system(*args) || abort("\n== Command #{args} failed ==")
end

def compile_proto
  proto_dir = 'lib/protos'
  gen_dir = 'lib/proto_gens'
  gen_path = Rails.root.join(gen_dir, '*.rb').to_s

  Rails.logger.info "Started compiling protos..."

  FileUtils.rm_rf(gen_path)
  system!('protoc', '--proto_path=lib/protos', '--ruby_out=lib/proto_gens', *Dir['lib/protos/*.proto'])
  system!('protoc', '--proto_path=lib/protos', '--twirp_ruby_out=lib/proto_gens', *Dir['lib/protos/*_service.proto'])

  Rails.logger.info "Finished compiling protos"
end

# directories = watched_dirs_with_extensions(reloadable_paths)
directories = {
  Rails.root.join('lib/protos').to_s => ['proto']
}
proto_paths = Dir[Rails.root.join('lib', 'protos', '**', '*.proto')].sort

app = Rails.application
reloader = app.config.file_watcher.new([], directories) do
  compile_proto
end

app.reloaders << reloader
app.reloader.to_run do
  reloader.execute_if_updated
end
reloader.execute
