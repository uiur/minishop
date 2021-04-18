# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  { name: 'SPECIAL BIG HOODIE', price: 50, image_url: 'https://i.gyazo.com/bb3d367ecb9494a1d95ca95463895d60.jpg' },
  { name: 'NEVER STOP DRINKING SHIRT', price: 30, image_url: 'https://i.gyazo.com/5de58213ac042b98219307ad01543248.jpg'},
  { name: 'HIGH TECHNOLOGY LONG SLEEVE', price: 40, image_url: 'https://i.gyazo.com/e0b11642c1775ace0cf7f5986660fb7c.jpg'}
].each do |attributes|
  product = Product.find_or_create_by!(attributes)
  pp product
end
