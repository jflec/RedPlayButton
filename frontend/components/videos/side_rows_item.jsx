import { ZoomInRounded } from '@material-ui/icons';
import React from 'react';
import { withRouter } from 'react-router';

function SideRowsItem(props) {
  const { video } = props;ZoomInRounded

  function visit() {
    props.history.push(`/watch/${video.id}`);
  }

  return (
    <div className="side-rows-item" onClick={visit}>
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
          className="side-rows-thumbnail"
        ></video>
      </div>
      <div className="side-rows-details">
        <h3>{video.title}</h3>
        <p className="side-rows-username">{video.user.username}</p>
        <p>{`${video.viewsCount} views • ${video.date}`}</p>
      </div>
    </div>
  );
}

export default withRouter(SideRowsItem);
