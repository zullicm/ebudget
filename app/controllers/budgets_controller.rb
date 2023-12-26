class BudgetsController < ApplicationController

  def index
    budgets = Budget.where(user_id: session[:user_id]) 
    render json: budgets
  end


  def create
    budget = Budget.create(budget_params)
    if budget.valid?
      render json: budget, status: :created
    else
      render json: { errors: budget.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    budget = Budget.find_by(id: params[:id])
    budget.update(budget_params)
    render json: budget
  end

  private

  def budget_params
    params.permit(:name, :amount, :color, :start_date, :end_date, :user_id)
  end

end
