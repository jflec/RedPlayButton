import React, { useEffect } from 'react';
import SideRowsItem from './side_rows_item';

function SideRows(props) {
  const { videos, searching } = props;

  useEffect(() => {
    if (!searching) props.fetchVideos();
  }, []);

  if (videos) {
    return (
      <div className="side-rows-holder">
        {videos.map((video) => (
          <SideRowsItem key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default SideRows;
