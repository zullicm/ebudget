class ExpensesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorized

  def index
    expenses = Expense.all
    if expenses
      render json: expenses, include: ['user']
    else
      render_not_found_response
    end
  end

  def show
    render json: find_expense
  end

  def create
    expense = Expense.create(expense_params)
    if expense.valid?
      render json: expense, status: :created
    else
      render json: { errors: expense.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    expense = find_expense
    expense.update(expense_params)
    render json: expense
  end

  def destroy
    expense = find_expense
    expense.destroy
    render json: expense 
  end

  private

  def expense_params
    params.permit(:name, :amount, :color, :start_date, :end_date, :user_id)
  end

  def find_expense
    Budget.find(params[:id])
  end
  
  def render_not_found_response
    render json: { error: "Expense not found" }, status: :not_found
  end
end
