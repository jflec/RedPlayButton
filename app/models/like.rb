class Like < ApplicationRecord

    validates :liker_id,
        uniqueness: { scope: [:likeable_id, :likeable_type] }

    validates :likeType, 
        inclusion: { in: %w(like dislike), 
            message: "%{value} is not a valid, must be like or dislike"}

    belongs_to :user,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :likeable,
        polymorphic: true

end
