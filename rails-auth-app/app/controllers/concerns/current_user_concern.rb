module CurrentUserConcern
  # Extend ActiveSupport::Concern to include module functionality
  extend ActiveSupport::Concern

  included do
    # Run set_current_user before all controller actions
    before_action :set_current_user
  end

  # Sets @current_user if a valid session exists
  def set_current_user
    if session[:user_id]
      # Find and set current user based on session ID
      @current_user = User.find(session[:user_id])
    end
  end

  # Helper method to access current user
  def current_user
    @current_user
  end
end


# Checks for user_id in session and sets up @current_user instance variable.
# This centralized authentication allows other parts of the application 
# to access the current user without repeated session validation.