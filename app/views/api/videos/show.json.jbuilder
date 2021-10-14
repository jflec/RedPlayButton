json.extract! @video, :id, :title, :description, :uploader_id
json.videoURL url_for(@video.videofile)
json.user do
    json.extract! @video.user, :id, :username, :profile_picture_url
end
json.date time_ago_in_words(@video.created_at) + " ago"
json.viewsCount @video.views.length
like = @video.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesCount @video.likes.select { |like| like.likeType == "like" }.length
json.dislikesCount @video.likes.select { |like| like.likeType == "dislike" }.length

if @video.comments
    json.comments @video.comments do |comment|
            json.id comment.id
            json.body comment.body
            json.date time_ago_in_words(comment.created_at) + " ago"
            json.commenter do
                json.extract! comment.commenter, 
                    :id, :username, :profile_picture_url
            end
    end
end