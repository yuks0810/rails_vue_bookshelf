Rails.application.routes.draw do
  devise_for :users
  root to: 'home#index'

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  namespace :api do
    resources :books, only: [:index, :show, :create, :update, :destroy]
  end
end
