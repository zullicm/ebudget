class Category < ApplicationRecord
  belongs_to :user
  belongs_to :budget
  has_many :expenses
end
