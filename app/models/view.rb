
class View < ApplicationRecord

   belongs_to :user,
        foreign_key: :viewer_id,
        class_name: :User,
        optional: true

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

end
