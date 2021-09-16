json.extract! @comment, :id, :body, :root_comment_id,  :video_id
json.commenter do
    json.extract! @comment.commenter, 
        :id, :username, :profile_picture_url
end
json.date time_ago_in_words(@comment.created_at) + " ago"