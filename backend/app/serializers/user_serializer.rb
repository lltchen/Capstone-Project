class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :email, :address, :phone_num, :role, :age, :my_campaigns, :my_donations
end
