class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :budget, null: false, foreign_key: true
  
      t.timestamps
      # 20230916193545
    end
  end
end
