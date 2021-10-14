@videos.each do |video|
     json.set! video.id do   
        json.extract! video, :id, :title, :description
        json.videoURL url_for(video.videofile)
        json.viewsCount video.views.length
        json.user do
                json.extract! video.user, :id, :username, :profile_picture_url
        end
        like = video.likes.select { |like| like.liker_id == @userId }
        json.like like[0]
        json.date time_ago_in_words(video.created_at) + " ago"
     end
end