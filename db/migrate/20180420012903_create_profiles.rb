class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :nick_name
      t.string :email
      t.string :street
      t.string :suburb
      t.string :city
      t.string :partner_relation
      t.string :partner_name
      t.integer :children_total
      t.string :children
      t.integer :income

      t.timestamps
    end
  end
end
