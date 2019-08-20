Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/current', {to: 'users#current'}
      resources :users, only: [:create]
    end
  end
  namespace :api do
    namespace :v1 do
      resource :session, only: [:create, :destroy]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :bids, only: [:create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :auctions, only: [:create, :index, :show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
