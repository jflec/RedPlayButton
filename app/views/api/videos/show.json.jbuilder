json.extract! @video, :id, :title, :description, :uploader_id
json.videoURL url_for(@video.videofile)
thumbnail = @video.thumbnail.attached? ? url_for(@video.thumbnail) : nil
json.thumbURL thumbnail
json.user do
    json.extract! @video.user, :id, :username, :profile_picture_url
end