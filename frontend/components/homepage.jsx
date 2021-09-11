import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import VideoIndexContainer from './videos/video_index_container';

export default () => {
  return (
    <div className="fake-background">
      <NavbarContainer />
      <VideoIndexContainer />
    </div>
  );
};
