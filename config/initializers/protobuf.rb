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

$pool = {}
Google::Protobuf::Builder.class_eval do
  alias_method :original_add_file, :add_file
  def add_file(name, options = nil, &block)
    $pool[name] ||= block
    original_add_file(name, options, &block)
  end
end

Rails.application.reloader.before_class_unload do
  Google::Protobuf::DescriptorPool.generated_pool = nil
  $VERBOSE = nil
  load 'google/protobuf/any_pb'
  load 'google/protobuf/duration_pb'
  load 'google/protobuf/field_mask_pb'
  load 'google/protobuf/struct_pb'
  load 'google/protobuf/timestamp_pb'
  load 'google/protobuf/well_known_types'
  $VERBOSE = true

  # pp $pool
  # $pool.each do |name, block|
  #   if name.start_with?('google/')
  #     pp name
  #     Google::Protobuf::DescriptorPool.generated_pool.build do
  #       add_file(name, syntax: :proto3, &block)
  #     end
  #   end
  # end
end
