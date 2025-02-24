class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :gamecd_id
end
