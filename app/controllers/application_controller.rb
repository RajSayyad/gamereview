class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # allow_browser versions: :modern
  before_action :set_default_format
  protect_from_forgery with: :exception, unless: -> { request.format.json? }
  before_action :set_csrf_cookie

  def set_default_format
    request.format = :json
  end

  private

  def set_csrf_cookie
    cookies["CSRF-TOKEN"] = form_authenticity_token if protect_against_forgery?
  end
end
