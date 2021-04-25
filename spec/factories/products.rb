FactoryBot.define do
  factory :product do
    sequence(:name) { |n| "HOODIE #{'X' * n}L" }
    price { 2000 }
  end
end
