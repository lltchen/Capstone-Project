class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email, :address, :phone_num, :role, :age, :my_campaigns, :my_donations
end
