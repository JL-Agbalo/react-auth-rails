class User < ApplicationRecord
    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email
end

# rails c
# User.create!(email: "Fish@gmail.com", password: "adminadmin", password_confirmation="adminadmin")
