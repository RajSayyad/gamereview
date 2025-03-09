module Api
    module V1
      class ReviewsController < ApplicationController
        def create
            review = Review.new(review_params)
            if review.save
              render json: ReviewSerializer.new(review).serialized_json, status: :created
            else
              render json: { error: review.errors.full_messages }, status: 422
            end
          end
  
        def destroy
          review = Review.find_by(id: params[:id])
          if review&.destroy
            head :no_content
          else
            render json: { error: "Review not found or could not be deleted" }, status: 422
          end
        end
  
        private
  
        def review_params
          params.require(:review).permit(:title, :description, :score, :gamecd_id)
        end
      end
    end
  end
  