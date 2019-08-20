class RenameColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :auctions, :current_price, :reserve_price
  end
end
