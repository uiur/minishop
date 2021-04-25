class UserResponse
  include ActiveModel::Model
  include ActiveModel::Attributes
  include ActiveModel::Validations
  include ActiveModel::Serialization

  ::Google::Protobuf::DescriptorPool.generated_pool.lookup("rpc.user.UserResponse").each do |field|
    type = {
      int32: :integer,
      int64: :big_integer,
      uint32: :integer,
      uint64: :big_integer,
      float: :float,
      double: :float,
      bool: :boolean,
      string: :string,
      bytes: nil,
      message: nil
    }
    attribute field.name, type[field.type]
    validates field.name, presence: true
  end
end
