class Donation < ApplicationRecord
  belongs_to :campaign
  delegate :user, to: :campaign

  def users_name
    User.find(self.user_id).name
  end

  def time_date
    self.created_at
  end
end
