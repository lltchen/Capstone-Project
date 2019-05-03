Rails.application.routes.draw do

resources :user, only: [:index,:show,:create,:update]
resources :campaign, only: [:index,:show,:create,:update]
resources :donation, only: [:index,:show,:create]
post '/login', to: 'auth#create'
get '/current_user', to: 'auth#show'
end
