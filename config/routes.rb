Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :update, :index]
    resources :videos, only: [:show, :index, :create, :destroy, :update]
    resources :likes, only: [:create, :destroy, :update]
    resources :dislikes, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end
end
