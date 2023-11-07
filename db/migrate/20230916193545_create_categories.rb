class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :description
      t.string :color
      t.belongs_to :budget, null: false, foreign_key: true
  
      t.timestamps
    end
  end
end
