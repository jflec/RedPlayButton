class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :commenter_id, foreign_key: true, null: false, index: true
      t.integer :video_id, foreign_key: true, null: false, index: true
      t.integer :root_comment_id, foreign_key: true, index: true

      t.timestamps
    end
  end
end
