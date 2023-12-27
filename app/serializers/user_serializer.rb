class UserSerializer < ActiveModel::Serializer
  attributes :id

  has_many :budgets
  has_many :categories
  has_many :expenses
end
