class Donation < ApplicationRecord
  belongs_to :campaign
  delegate :user, to: :campaign

  def users_name
    User.find_by(name:self.user.name).name
  end


end
