import React from 'react';
import { withRouter } from 'react-router';

function VideoRowsItem(props) {
  const { video } = props;

  function visit() {
    props.history.push(`/watch/${video.id}`);
  }

  return (
    <div className="video-rows-item side-index-item" onClick={visit}>
      <div>
        <video
          alt={`${video.title} thumbnail`}
          src={video.videoURL}
          loop={true}
          muted
          onMouseOver={(event) => event.target.play()}
          onMouseOut={(event) => (
            (event.target.currentTime = 0), event.target.pause()
          )}
          className="video-rows-thumbnail side-index-item"
        ></video>
      </div>
      <div className="video-rows-details">
        <h3>{video.title}</h3>
        <div className="channel-info">
          {!video.user.profile_picture_url ? (
            <img
              className="video-rows-user-icon"
              src={window.defaultPFP}
              alt=""
            />
          ) : (
            <img
              className="video-rows-user-icon"
              src={video.user.profile_picture_url}
            />
          )}
          <p className="video-rows-username">{video.user.username}</p>
        </div>
        <p className="video-rows-description">{video.description}</p>
      </div>
    </div>
  );
}

export default withRouter(VideoRowsItem);
