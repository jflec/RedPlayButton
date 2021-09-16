import React, { useRef } from 'react';
function VideoPlayer(props) {
  const { URL, id } = props;

  const video = useRef(null);

  if (id) {
    return (
      <video
        className="video-show"
        autoPlay
        controls={true}
        ref={video}
        src={URL}
      ></video>
    );
  } else {
    return <div></div>;
  }
}

export default VideoPlayer;
