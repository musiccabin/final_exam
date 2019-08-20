class User < ApplicationRecord

    has_secure_password
    has_many :auctions, dependent: :destroy
    has_many :bids, dependent: :destroy

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end
