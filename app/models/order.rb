class Order < ApplicationRecord
  has_many :order_items
  enum status: [:cart, :ordered], _prefix: true
  belongs_to :shipping_address, optional: true
  accepts_nested_attributes_for :shipping_address, update_only: true

  def amount
    order_items.map(&:amount).sum
  end
end
