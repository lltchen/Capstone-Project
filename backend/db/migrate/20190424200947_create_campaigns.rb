class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :subject
      t.string :description
      t.string :goal
      t.string :user_id
      t.integer :duration
      t.string :reason_for_arrest
      t.string :time_at_rikers
      t.string :time_untill_hearing
      t.string :for_whom
      t.string :relationship

      t.timestamps
    end
  end
end
