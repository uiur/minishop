class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product
  before_validation :set_price

  def amount
    price * quantity
  end

  private

  def set_price
    self.price ||= product.price
  end
end
