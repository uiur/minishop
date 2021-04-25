class Order < ApplicationRecord
  has_many :order_items

  enum status: [:cart, :ordered], _prefix: true
end
