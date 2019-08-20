class AuctionSerializer < ActiveModel::Serializer
  attributes(:id, :item, :description, :created_at, :ends_at, :user, :reserve_price)

  belongs_to(:user)
  has_many(:bids)

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :auction, :price, :created_at

    belongs_to :user
    belongs_to :auction
  end

  class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email

    has_many :auctions
    has_many :bids
  end
end
