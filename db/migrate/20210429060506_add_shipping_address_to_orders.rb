class AddShippingAddressToOrders < ActiveRecord::Migration[6.0]
  def change
    change_table :orders do |t|
      t.references :shipping_address, foreign_key: true, type: :uuid
    end
  end
end
