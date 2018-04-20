class AddStepsToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :steps, :integer
  end
end
