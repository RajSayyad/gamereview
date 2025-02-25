Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*' # Change this to your frontend URL in production for security
      resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
    end
  end
  