if Rails.env.production?
  Rails.application.config.session_store :cookie_store, 
    key: '_authentication_app', 
    secure: true,
    domain: 'fish-authentication-react-app-api.herukoapp.com'
else
  Rails.application.config.session_store :cookie_store, 
    key: '_authentication_app', 
    secure: false
end

