class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders, id: :uuid do |t|
      t.integer :status, null: false, default: 0
      t.date :expected_delivery_date
      t.datetime :ordered_at
      t.timestamps
    end
  end
end
