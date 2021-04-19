class ProtobufInflector < Zeitwerk::Inflector
  def camelize(basename, abspath)
    if basename =~ /\A.*(_pb|_twirp)$/
      basename.sub(/(_pb|_twirp)$/, '').camelize
    else
      super
    end
  end
end

Rails.autoloaders.each do |autoloader|
  autoloader.inflector = ProtobufInflector.new
  autoloader.ignore "lib/gens/**/*_service_pb.rb"
end
