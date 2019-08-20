class Api::V1::BidsController < Api::ApplicationController

  before_action :authenticate_user!

  def create
    bid = Bid.new(bid_params)
    bid.user = current_user
    p bid
    if bid.save
        render json: {id: bid.id}
    else
        render(json: {errors: bid.errors}, status: 422)
    end
  end

  private
  def bid_params
    params.require(:bid).permit(:price, :auction_id)
  end
end
