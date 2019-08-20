require 'test_helper'

class Api::V1::BidsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_bids_create_url
    assert_response :success
  end

end
