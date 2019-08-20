class Auction < ApplicationRecord
  require 'date'

  belongs_to :user

  has_many :bids, dependent: :destroy

  validates :item, presence: true
  validates :reserve_price, presence: true
  validate :ends_after_today

  def ends_after_today
    p self.ends_at
    self.ends_at >= Date.today
  end
end
