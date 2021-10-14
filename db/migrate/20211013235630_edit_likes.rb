class EditLikes < ActiveRecord::Migration[6.1]
  def change
    add_column :likes, :type, :string, null: false
  end
end
