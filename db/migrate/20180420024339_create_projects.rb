class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :user
      t.string :email
      t.integer :state

      t.timestamps
    end
  end
end
