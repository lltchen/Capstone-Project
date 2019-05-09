class Campaign < ApplicationRecord
  belongs_to :user
  has_many :donations
  serialize :my_donations, Array
  has_one_attached :image
  attribute :number_of_donations

  def my_donations
    self.donations.map do |donation|
      ActiveModel::Serializer::DonationSerializer.new(donation)
    end
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
  def current_amount_donated
    self.donations.map { |donation| donation.donation_amount }.sum
  end

end
