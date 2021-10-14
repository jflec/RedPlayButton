class EditLikesAgain < ActiveRecord::Migration[6.1]
  def change
    remove_column :likes, :type, :string
    add_column :likes, :likeType, :string, null: false
  end
end
