class Video < ApplicationRecord
    validates :title, :uploader_id, presence: true

    belongs_to :user,
        foreign_key: :uploader_id,
        class_name: :user

    has_many :comments,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :commenters,
        through: :comments,
        source: :commenter

    has_many :views,
        foreign_key: :video_id,
        class_name: :View



end

