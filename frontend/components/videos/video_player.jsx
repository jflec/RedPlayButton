import React, { useRef, useState } from 'react';
function VideoPlayer(props) {
  const { URL, id, max } = props;

  const video = useRef(null);

  if (id) {
    return (
      <div className="player">
        <video
          className="video-show"
          autoPlay
          controls={true}
          ref={video}
          src={URL}
        ></video>
      </div>
    );
  } else {
    return <h1>... nothing found</h1>;
  }
}

export default VideoPlayer;
