class BudgetsController < ApplicationController

  def index
    budget = Budget.all
    render json: budget
  end

  def create
    budget BUdget.create(budget_params)
    render json: budget, status: :created
  end


end
