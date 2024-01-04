class BudgetsController < ApplicationController
  skip_before_action :authorized
  def index
    budgets = Budget.where(user_id: session[:user_id])
    if budgets
      render json: budgets, include: ['user']
    else
      render_not_found_response
    end
  end

  def show
    budget = find_budget
    render json: budget
  rescue ActiveRecord::RecordNotFound
    render_not_found_response
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
    budget = find_budget
    if budget
      budget.update(budget_params)
      render json: budget
    else
      render_not_found_response
    end
  end

  def destroy
    budget = find_budget
    budget.destroy
    render json: budget 
  rescue ActiveRecord::RecordNotFound
    render_not_found_response
  end

  private

  def budget_params
    params.permit(:name, :amount, :color, :start_date, :end_date, :user_id)
  end

  def find_budget
    Budget.find(params[:id])
  end
  
  def render_not_found_response
    render json: { error: "Budget not found" }, status: :not_found
  end

end

# When using the find instead of find_by method, we are thrown an active
# record not found reponse instead of nil if it cant find the specific budget
# So you can use the "rescue ActiveRecord::RecordNotFound" and that will go 
# off if at any point there is an error