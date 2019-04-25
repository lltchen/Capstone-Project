class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password
      t.string :email
      t.string :address
      t.string :phone_num
      t.string :role
      t.integer :age

      t.timestamps
    end
  end
end
