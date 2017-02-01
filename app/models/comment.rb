class Comment < ApplicationRecord

  belongs_to :post

  def self.recent(n)
    Comment.all.order(created_at: :desc).limit(n);
  end

end
