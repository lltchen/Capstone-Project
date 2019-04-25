class Donation < ApplicationRecord
  belongs_to :campaign
  delegate :user, to: :campaign
end
