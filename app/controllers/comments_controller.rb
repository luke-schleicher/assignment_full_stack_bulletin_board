class CommentsController < ApplicationController

  def index
    @comments = Comment.recent(10)

    respond_to do |format|
      format.json { render json: @comments.to_json }
    end
  end

end
