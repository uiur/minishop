class CreateShippingAddresses < ActiveRecord::Migration[6.0]
  def change
    create_table :shipping_addresses, id: :uuid do |t|
      t.string :address1, null: false
      t.string :address2, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.string :name, null: false
      t.string :phone, null: false
      t.string :zip, null: false

      t.timestamps
    end
  end
end
