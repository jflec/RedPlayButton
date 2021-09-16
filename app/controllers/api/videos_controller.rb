class Api::VideosController < ApplicationController
    def show
        @video = Video.includes( thumbnail_attachment: [:blob], videofile_attachment: [:blob], comments: [:commenter]).find_by(id: params[:id])
    end
    
    def index
        @userId = current_user.id if current_user
        if params[:query]
            @videos = Video.where('lower(title) like ?',
            "%#{params[:query].downcase}%").includes(:user, thumbnail_attachment: [:blob], videofile_attachment: [:blob])
        else
            @videos = Video.all.includes(:user, thumbnail_attachment: [:blob], videofile_attachment: [:blob])
        end

    end
    
    def create
        @video = Video.new(video_params)
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: :unprocessable_entity
        end

    end

    def destroy
        @video = Video.find(params[:id])
        if @video.destroy
            render json: @video.id
        else
            render json: @video.errors.full_messages, status: :unprocessable_entity
        end
    
    end

    def video_params
        params.require(:video).permit(:title, :description, :uploader_id, :videofile)
    end

end
