class CreateViews < ActiveRecord::Migration[6.1]
  def change
    create_table :views do |t|
      t.integer :viewer_id, null: false, index: true
      t.integer :video_id, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
