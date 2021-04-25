class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items, id: :uuid do |t|
      t.references :order, null: false, type: :uuid, foreign_key: true
      t.references :product, null: false, type: :uuid, foreign_key: true

      t.integer :price, null: false
      t.integer :quantity, null: false

      t.timestamps
    end
  end
end
