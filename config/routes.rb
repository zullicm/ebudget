Rails.application.routes.draw do
  resources :budgets
  resources :expenses
  resources :categories
  resources :users, only:[:create]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
