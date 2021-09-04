class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id, foreign_key: true, null: false, index: true
      t.references :likeable, null: false, index: true, polymorphic: true

      t.timestamps
    end
  end
end
