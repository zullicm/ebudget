class CreateBudgets < ActiveRecord::Migration[7.0]
  def change
    create_table :budgets do |t|
      t.float :amount
      t.string :start_date
      t.string :end_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
      # 20230916193938
    end
  end
end
