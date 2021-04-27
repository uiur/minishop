require "protorails/railtie"

module Protorails
  def self.setup
    yield self.config
  end

  class Configuration
    attr_accessor :proto_dir, :proto_gen_dir
    def initialize(*)
      @proto_dir = 'lib/protos'
      @proto_gen_dir = 'lib/gens'
    end
  end

  @config = Configuration.new
  class << self
    attr_reader :config
  end
end
