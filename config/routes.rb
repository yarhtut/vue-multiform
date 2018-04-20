Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/profiles', to: 'profiles#user_info_step_1'
  root to: 'homes#index'
end
