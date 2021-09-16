import React from 'react';
import CommentIndexItem from './comment_index_item';

function CommentIndex(props) {
  const { comments, userId, deleteComment } = props;

  if (comments) {
    return (
      <div className="comment-index">
        {comments.map((comment) => (
          <CommentIndexItem
            key={comment.id}
            comment={comment}
            deleteComment={deleteComment}
            userId={userId}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default CommentIndex;
