class EditViews < ActiveRecord::Migration[6.1]
  def change
    remove_column :views, :viewer_id, :integer
    add_column :views, :viewer_id, :integer
  end
end
