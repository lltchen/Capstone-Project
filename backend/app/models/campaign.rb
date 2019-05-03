class Campaign < ApplicationRecord
  belongs_to :user
  has_many :donations
  serialize :my_donations, Array

  def my_donations
    self.donations
  end

  def number_of_donations
    self.my_donations.length
  end

  def my_campaigns
    self.user.name
  end

  def campaign_creator
    self.user.name
  end


end
