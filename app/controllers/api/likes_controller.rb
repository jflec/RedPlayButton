class Api::LikesController < ApplicationController
    
    def create
        if like_params[:likeable_type] == "Video"
            likeable = Video.find_by(id: like_params[:likeable_id])
        else
            likeable = Comment.find_by(id: like_params[:likeable_id])
        end

        if likeable.likes.create(like_params)
            @like = Like.find_by(liker_id: like_params[:liker_id],
            likeable_id: like_params[:likeable_id])
            render :show
        else
            render json: likeable.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @like = Like.find_by(id: params[:id])

        if @like.update(like_params)
            render :show
        else
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])

        if @like.destroy
            render :show
        else
            
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def like_params
        params.require(:like).permit(  :liker_id,
                                        :likeable_type,
                                        :likeable_id,
                                        :likeType,
                                        :id
                                    )
    end

end