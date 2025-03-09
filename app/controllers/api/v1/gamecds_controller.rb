module Api
    module V1
      class GamecdsController < ApplicationController
        def index
          gamecds = Gamecd.all
          render json: GamecdSerializer.new(gamecds, options).serialized_json
        end

        def show
          gamecd = Gamecd.find_by(slug: params[:slug])
          if gamecd
            render json: GamecdSerializer.new(gamecd, options).serialized_json
          else
            render json: { error: "Game CD not found" }, status: 404
          end
        end

        def create
          gamecd = Gamecd.new(gamecd_params)
          if gamecd.save
            render json: GamecdSerializer.new(gamecd).serialized_json
          else
            render json: { error: gamecd.errors.messages }, status: 422
          end
        end

        def update
          gamecd = Gamecd.find_by(slug: params[:slug])
          if gamecd&.update(gamecd_params)
            render json: GamecdSerializer.new(gamecd, options).serialized_json
          else
            render json: { error: gamecd&.errors&.messages || "Game CD not found" }, status: 422
          end
        end

        def destroy
          gamecd = Gamecd.find_by(slug: params[:slug])
          if gamecd&.destroy
            head :no_content
          else
            render json: { error: gamecd&.errors&.messages || "Game CD not found" }, status: 422
          end
        end

        private

        def gamecd_params
          params.require(:gamecd).permit(:name, :image_url)
        end

        def options
          @options ||= { include: [ :reviews ] }  # Fixed syntax error in include
        end
      end
    end
end
