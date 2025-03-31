Rails.application.config.session_store :cookie_store, 
  key: '_authentication_app', 
  same_site: :lax,
  secure: Rails.env.production?,
  domain: 'fish-authentication-react-app-api.herukoapp.com'

