class ApplicationController < ActionController::Base
    def current_user
        if session[:user_id].present?
            user = User.find_by(id: session[:user_id])
        end
        user
    end

    helper_method :current_user
end
