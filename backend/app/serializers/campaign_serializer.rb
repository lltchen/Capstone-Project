class CampaignSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id,:image,:subject,:description,:goal,:user_id,:reason_for_arrest,:time_at_rikers,:time_untill_hearing,:for_whom,:relationship,:my_donations,:number_of_donations,:my_campaigns,:campaign_creator


def image
  rails_blob_path(object.image,only_path: true)if object.image.attached?
end



end
