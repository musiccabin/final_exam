class Api::V1::AuctionsController < Api::ApplicationController

  before_action :authenticate_user!, only: [:create]
  
  def create
    auction = Auction.new(auction_params)
    auction.user = current_user
    if auction.save
      render json: {id: auction.id}
    else
      render(json: {errors: auction.errors}, status: 422)
    end
  end

  def show
    auction = Auction.find_by(id: params[:id])
    if auction.present?
      render(json: auction)
    else
      render(json: {error: 'auction not found', status: 404}, status: 404)
    end
end

  def index
    auctions = Auction.order(ends_at: :desc)
    render(json: auctions, each_serializer: AuctionCollectionSerializer)
end

  private
  def auction_params
    params.require(:auction).permit(:item, :description, :reserve_price, :ends_at)
  end
end
