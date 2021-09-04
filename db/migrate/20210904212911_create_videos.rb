class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false, index: true
      t.string :description
      t.integer :uploader_id, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
