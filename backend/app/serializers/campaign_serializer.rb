class CampaignSerializer < ActiveModel::Serializer
  attributes :id,:subject,:description,:goal,:user_id,:reason_for_arrest,:time_at_rikers,:time_untill_hearing,:for_whom,:relationship,:my_donations,:number_of_donations,:my_campaigns,:campaign_creator
end
