class CreateDonations < ActiveRecord::Migration[5.2]
  def change
    create_table :donations do |t|
      t.integer :donation_amount
      t.integer :campaign_id
      t.integer :user_id

      t.timestamps
    end
  end
end
