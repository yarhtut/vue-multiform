Rails.application.routes.draw do
  resources :projects
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/profiles', to: 'profiles#user_info_step_1'
  post '/profiles/:id', to: 'profiles#user_info_step_2'

  get '/pages/:id', to: 'profiles#index'
  get '/charts', to: 'profiles#index'
  root to: 'profiles#index'
end
