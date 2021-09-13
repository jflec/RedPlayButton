import React, { useEffect } from 'react';
import VideoRowsItem from './video_rows_item';

function VideoRows(props) {
  const { videos, searching } = props;

  useEffect(() => {
    if (!searching) props.fetchVideos();
  }, []);

  if (videos) {
    return (
      <div className="video-rows-holder side-index">
        {videos.map((video) => (
          <VideoRowsItem key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default VideoRows;
