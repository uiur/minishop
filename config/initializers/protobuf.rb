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

Zeitwerk::Loader.class_eval do
  alias_method :orig_unload, :unload
  def unload
    Google::Protobuf::DescriptorPool.generated_pool = nil
    orig_unload
  end
end
