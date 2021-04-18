class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products, id: :uuid do |t|
      t.string :name, null: false
      t.string :image_url
      t.integer :price, null: false

      t.timestamps
    end
  end
end
