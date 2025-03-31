class SessionsController < ApplicationController
  def create
    user = User
    .find_by(email: params["user"]["email"])
    .try(:authenticate, params["user"]["password"])
    
    if user
      session[:user_id] = user.id
      render json: {status: :created, user: user, logged_in: true}
    else
      render json: {status: 401, message: "Invalid email or password"}, status: :unauthorized
    end

  end
end
