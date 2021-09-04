class CreateDislikes < ActiveRecord::Migration[6.1]
  def change
    create_table :dislikes do |t|
      t.integer :disliker_id, foreign_key: true, null: false, index: true
      t.references :dislikeable, null: false, index: true, polymorphic: true

      t.timestamps
    end
  end
end
