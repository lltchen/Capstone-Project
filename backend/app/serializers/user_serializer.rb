class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :password, :email, :address, :phone_num, :role, :age, :my_campaigns, :my_donations


  def image
    rails_blob_path(object.image,only_path: true)if object.image.attached?
  end

end
