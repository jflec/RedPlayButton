import React, { useState } from 'react';

function CommentForm(props) {
  const { user, video_id } = props;
  const [body, setBody] = useState('');

  function handleInput(e) {
    setBody(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      props.history.push('/login');
      return;
    }
    props.createComment({
      body,
      commenter_id: user.id,
      video_id,
    });
    setBody('');
  }

  return (
    <div className="comment-form-container">
      {user ? (
        <img className="user-icon-small" src={user.profile_picture_url}></img>
      ) : (
        <img className="user-icon-small" src={window.defaultPFP} />
      )}
      <div className="comment-details">
        <form className="comment-form">
          <input
            className="comment-text-input"
            type="text"
            placeholder="Add a public comment..."
            value={body}
            onChange={handleInput}
          ></input>
          <button className="comment-button" onClick={handleSubmit}>
            COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
