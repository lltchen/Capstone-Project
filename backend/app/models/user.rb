class User < ApplicationRecord
  has_many :campaigns
  has_many :donations, through: :campaigns


  validates :name, uniqueness: true
  validates :email, uniqueness: true


end
