class PostsController < ApplicationController

  def index
    @posts = Post.all

    respond_to do |format|
      format.json { render json: @posts.to_json } # TODO: add (include: :comments)
    end
  end

end
