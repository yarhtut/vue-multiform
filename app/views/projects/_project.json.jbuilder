json.extract! project, :id, :name, :user, :email, :state, :created_at, :updated_at
json.url project_url(project, format: :json)
