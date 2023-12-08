class Budget < ApplicationRecord
  belongs_to :user
  has_many :categorys
  has_many :expenses, through: :categories
end
