class Video < ApplicationRecord
    
    validates :title, :uploader_id, presence: true

    belongs_to :user,
        foreign_key: :uploader_id,
        class_name: :User

    has_one_attached :videofile
    has_one_attached :thumbnail

end

