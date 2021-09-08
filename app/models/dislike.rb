class Dislike < ApplicationRecord

    validates :disliker_id,
        uniqueness: { scope: [:dislikeable_id, :dislikeable_type] }

    belongs_to :user,
        foreign_key: :disliker_id,
        class_name: :User

    belongs_to :dislikeable,
        polymorphic: true

end
