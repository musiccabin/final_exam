class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(:id, :item, :description, :reserve_price, :ends_at, :created_at)
end
