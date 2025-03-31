class SessionsController < ApplicationController
  # Include the CurrentUserConcern module to handle user session management
  include CurrentUserConcern

  # Handles user login authentication
  def create
    # Attempt to find and authenticate user using email and password
    # Using .try(:authenticate) to safely handle cases where user is not found
    user = User
    .find_by(email: params["user"]["email"])
    .try(:authenticate, params["user"]["password"])
    
    if user
      # If authentication successful, store user ID in session
      session[:user_id] = user.id
      # Return success response with user data
      render json: {status: :created, user: user, logged_in: true}
    else
      # If authentication fails, return unauthorized error
      render json: {status: 401, message: "Invalid email or password"}, status: :unauthorized
    end
  end

  # Checks if user is currently logged in
  def logged_in
    if @current_user
      # If current user exists, return true with user data
      render json: { logged_in: true, user: @current_user }
    else
      # If no current user, return false
      render json: { logged_in: false }
    end
  end

  def logout
    # Clear the session by deleting the user ID
    reset_session
    # Return success response indicating user is logged out
    render json: { status: 200, logged_out: true }
  end
end
