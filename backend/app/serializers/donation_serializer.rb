class DonationSerializer < ActiveModel::Serializer
  attributes :id,:campaign_id,:users_name,:donation_amount,:user_id,:time_date

  def time_date
    DateTime.now
  end


end
