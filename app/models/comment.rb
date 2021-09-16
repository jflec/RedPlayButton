class Comment < ApplicationRecord
    validates :body, :commenter_id, :video_id, presence: true

    belongs_to :commenter,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

    belongs_to :root_comment,
        primary_key: :id,
        foreign_key: :root_comment_id,
        class_name: :Comment,
        optional: true

    has_many :replies,
        primary_key: :id,
        foreign_key: :root_comment_id,
        class_name: :Comment

    has_one :root_commenter,
        through: :root_comment,
        source: :commenter

end
