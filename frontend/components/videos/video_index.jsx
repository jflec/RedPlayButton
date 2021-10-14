import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item';

function VideoIndex(props) {
  const { videos, searching, userId, page, deleteVideo } = props;

  useEffect(() => {
    if (!searching) props.fetchVideos();
  }, []);

  if (videos) {
    let filter = videos;
    if (page === 'channel')
      filter = videos.filter((video) => video.user.id === userId);
    

    return (
      <div className={`video-index`}>
        {filter.map((video) => (
          <VideoIndexItem
            key={video.id}
            video={video}
            deleteVideo={deleteVideo}
            currentUserId={userId}
          />
        ))}
      </div>
    );
  }
}

export default VideoIndex;
