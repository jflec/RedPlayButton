class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render json: @comment.id
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def comment_params
        params.require(:comment).permit( :body, :root_comment_id, :commenter_id, :video_id)
    end

end