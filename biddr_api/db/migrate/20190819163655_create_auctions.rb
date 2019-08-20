class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :item
      t.string :description
      t.integer :current_price
      t.date :ends_at
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
