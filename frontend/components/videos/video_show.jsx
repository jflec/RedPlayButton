import React, { useEffect } from 'react';
import NavbarContainer from '../navbar/navbar_container';
import VideoPlayer from './video_player';
import VideoRowsContainer from './video_rows_container';

function VideoShow(props) {
  const { videos, video, userId } = props;

  useEffect(() => {
    if (videos.length <= 1) {
      props.fetchVideos();
    }

    return () => {
      document.title = 'RedPlayButton';
    };
  }, []);

  useEffect(() => {
    props.fetchVideo(props.match.params.videoId, userId).then((res) => {
      document.title = `${res.video.title}`;
    });
    return () => {
      document.title = 'RedPlayButton';
    };
  }, [props.match.params.videoId]);

  if (video) {
    return (
      <div className="fake-background">
        <div>
          <NavbarContainer />
          <VideoPlayer URL={video.videoURL} id={video.id} max={videos.length} />
          <p className="video-title">{video.title}</p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default VideoShow;
