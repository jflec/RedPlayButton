class Video < ApplicationRecord
    validates :title, :uploader_id, presence: true
    validates :title, length: {maximum: 70}

    belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

    has_many :views,
    foreign_key: :video_id,
    class_name: :View

    has_many :comments, -> { order 'created_at desc' },
    foreign_key: :video_id,
    class_name: :Comment

    has_many :commenters,
    through: :comments,
    source: :commenter

    has_one_attached :videofile
    has_one_attached :thumbnail

end

