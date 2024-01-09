class CategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  skip_before_action :authorized

  def show
    render json: find_category
  end

  def create
    category = Category.create(category_params)
    if category.valid?
      render json: category, status: :created
    else
      render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    category = find_category
    category.update(category_params)
    render json: category
  end

  def destroy
    category = find_category
    category.destroy
    render json: category 
  end

  private

  def category_params
    params.permit(:name, :description, :color, :user_id, :budget_id)
  end

  def find_category
    Category.find(params[:id])
  end
  
  def render_not_found_response
    render json: { error: "Category not found" }, status: :not_found
  end

end

