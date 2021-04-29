class Order < ApplicationRecord
  enum status: [:cart, :ordered], _prefix: true
  belongs_to :shipping_address, optional: true
  has_many :order_items, -> { order(:created_at) }

  validates :amount, numericality: { greater_than: 0 }, if: :status_ordered?
  validates :shipping_address, presence: true, if: :status_ordered?
  accepts_nested_attributes_for :shipping_address, update_only: true

  def amount
    order_items.map(&:amount).sum
  end
end
