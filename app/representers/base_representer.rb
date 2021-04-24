# example:
#   UserResponseRepresenter.new(user).serializable_hash(context: {})
require 'google/protobuf/well_known_types'

class BaseRepresenter
  attr_reader :object, :context
  def initialize(object)
    @object = object
  end

  class <<self
    Field = Struct.new(:name, :type, :representer, keyword_init: true)
    def field(name, type = nil, representer: nil)
      @fields ||= []

      found_field = @fields.find { |f| f.name == name }
      if found_field
        found_field.type = type if type
        found_field.representer = representer if representer
      else
        @fields << Field.new(name: name.to_sym, type: type, representer: representer)
      end
    end

    def fields
      @fields ||= []
    end

    def schema(schema_class)
      schema_class.descriptor.each do |descriptor_field|
        field descriptor_field.name, descriptor_field.type
      end
    end

    def represent(object, context: {})
      objects = object.respond_to?(:each) ? object : [object]

      result = objects.map do |obj|
        new(obj).serializable_hash(context: context)
      end

      object.respond_to?(:each) ? result : result.first
    end
  end

  def cast_value(value)
    case value
    when Time
      t = Google::Protobuf::Timestamp.new
      t.from_time(value)
      t
    else
      value
    end
  end

  def serializable_hash(context: {})
    @context = context
    self.class.fields.each_with_object({}) do |field, hash|
      name = field.name
      value =
        if respond_to?(name)
          send(name)
        elsif object.respond_to?(name)
          object.public_send(name)
        elsif object.respond_to?(:"#{name}?")
          object.public_send(:"#{name}?")
        else
          raise "#{name} is not defined"
        end

      if field.representer
        value = field.representer.represent(value, context: @context)
      end

      hash[field.name] = cast_value(value)
    end
  end

  # ::Google::Protobuf::DescriptorPool.generated_pool.lookup("rpc.user.UserResponse").each do |field|
  #   type = {
  #     int32: :integer,
  #     int64: :big_integer,
  #     uint32: :integer,
  #     uint64: :big_integer,
  #     float: :float,
  #     double: :float,
  #     bool: :boolean,
  #     string: :string,
  #     bytes: nil,
  #     message: nil
  #   }
  #   field field.name, type[field.type]
  # end
end
