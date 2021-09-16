import React, { useRef } from 'react';

function CommentIndexItem(props) {
  const { comment } = props;
  const commentMenu = useRef(null);

  if (comment) {
    return (
      <div className="comment-display">
        {comment.commenter.profile_picture_url ? (
          <img
            className="user-icon-medium"
            src={comment.commenter.profile_picture_url}
          ></img>
        ) : (
          <img className="user-icon-medium" src={window.defaultPFP} />
        )}
        <div className="comment-details">
          <div className="comment-user-date">
            <p className="comment-user">{comment.commenter.username}</p>
            <p className="comment-date">{comment.date}</p>
          </div>
          <p className="comment">{comment.body}</p>
        </div>
        {comment.commenter.id === props.userId ? (
          <div>
            <svg
              ref={commentMenu}
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="comment-trash-icon"
              onClick={() => {
                props.deleteComment(comment.id);
              }}
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
            </svg>
          </div>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
}

export default CommentIndexItem;
