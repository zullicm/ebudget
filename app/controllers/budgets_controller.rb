class BudgetsController < ApplicationController

  def index
    budgets = Budget.where(user_id: session[:user_id]) 
    render json: budgets, include: ['user']
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

  def destroy
    budget = Budget.find_by(id: params[:id])
    if budget
      budget.destroy
      render json: budget 
    else
      render json: { error: "Budget not found" }, status: :not_found
    end
  end

  private

  def budget_params
    params.permit(:name, :amount, :color, :start_date, :end_date, :user_id)
  end

end
