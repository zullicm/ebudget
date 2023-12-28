class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username

  has_many :budgets
  has_many :categories
  has_many :expenses
end
