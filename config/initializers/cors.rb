Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "http://localhost:5173", "http://127.0.0.1:5173" # 👈 Replace with your frontend URL
  
      resource "*",
        headers: :any,
        expose: ["X-CSRF-Token"], # 👈 Important for CSRF protection
        methods: [:get, :post, :put, :patch, :delete, :options, :head],
        credentials: true # 👈 Required if using `withCredentials: true` in Axios
    end
  end
  