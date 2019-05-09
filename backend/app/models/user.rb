class User < ApplicationRecord
  has_secure_password
  has_many :campaigns
  has_many :donations, through: :campaigns
  has_one_attached :user_image



  def my_donations
    self.donations.map do |donation|
      ActiveModel::Serializer::DonationSerializer.new(donation)
    end
  end

  def my_campaigns
    self.campaigns.map do |campaign|
      ActiveModel::Serializer::CampaignSerializer.new(campaign)
    end
  end

  def total_donation_amount
    self.donations.map { |donation| donation.donation_amount }.sum
  end

  def num_of_donations
    self.donations.length
  end

end
