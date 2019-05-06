class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :password, :email, :address, :phone_num, :role, :age, :my_campaigns, :my_donations,:user_image


  def user_image
    rails_blob_path(object.user_image,only_path: true)if object.user_image.attached?
  end

end
