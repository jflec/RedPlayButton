import React, { useRef, useState } from 'react';
function VideoPlayer(props) {
  const { URL, id, max } = props;

  const video = useRef(null);

  if (id) {
    return (
      <div className="player">
        <video autoPlay ref={video} src={URL}></video>
      </div>
    );
  } else {
    return <h1>... nothing found</h1>;
  }
}

export default VideoPlayer;
