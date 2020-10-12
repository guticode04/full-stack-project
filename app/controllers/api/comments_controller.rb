class Api::CommentsController < ApplicationController

   # May not need this because when we fetch track we also fetch comments
   # look at track show. Might be double fetching same comments
   def index
      # @comments = Track.includes(:comments)
      # @comments = Comment.all
      @comments = Track.find(params[:track_id]).comments
   end

   def show
      @comment = Comment.find(params[:id])
      if @comment
         render :show
      else
         render json: @comment.errors.full_messages, status: 422
      end
   end

   def create
      @comment = Comment.new(comment_params)
      if @comment.save
         render :show
      else
         render json: @comment.errors.full_messages, status: 422
      end
   end

   def update
      @comment = Comment.find(params[:id])
      if @comment.update(comment_params)
         render :show
      else
         render json: @comment.errors.full_messages, status: 422
      end
   end

   def destroy
      @comment = Comment.find(params[:id])
      if @comment.destroy
         render json: @comment.id
      else
         render json: @comment.errors.full_messages, status: 422
      end
   end

   private
   def comment_params
      params.require(:comment).permit(:body, :track_id, :user_id)
   end

end