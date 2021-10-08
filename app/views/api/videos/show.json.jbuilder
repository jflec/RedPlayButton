json.extract! @video, :id, :title, :description, :uploader_id
json.videoURL url_for(@video.videofile)
thumbnail = @video.thumbnail.attached? ? url_for(@video.thumbnail) : nil
json.thumbURL thumbnail
json.user do
    json.extract! @video.user, :id, :username, :profile_picture_url
end

if @video.comments
    json.comments @video.comments do |comment|
            json.id comment.id
            json.body comment.body
            json.date time_ago_in_words(comment.created_at) + " ago"
            if json.commenter do
                json.extract! comment.commenter, 
                    :id, :username, :profile_picture_url
            end
    end
end