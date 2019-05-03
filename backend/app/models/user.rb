class User < ApplicationRecord
  has_secure_password

  has_many :campaigns
  has_many :donations, through: :campaigns



  def my_donations
    self.donations
  end

  def my_campaigns
    self.campaigns
  end

end
