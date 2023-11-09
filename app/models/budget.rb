class Budget < ApplicationRecord
  belongs_to :user
  has_many :categorys
end
