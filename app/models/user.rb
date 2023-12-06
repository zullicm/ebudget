class User < ApplicationRecord
  has_secure_password
  has_many :budgets
  has_many :expenses
  has_many :categories, through: :expenses


  has_many :budgets
  has_many :expenses
end
