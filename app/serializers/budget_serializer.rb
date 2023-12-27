class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :color, :start_date, :end_date, :user_id

  has_one :user
end
