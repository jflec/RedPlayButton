import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Sidebar from './sidebar';
import VideoIndexContainer from './videos/video_index_container';

export default () => {
  return (
    <div className="homepage">
      <NavbarContainer />
      <Sidebar />
      <VideoIndexContainer />
    </div>
  );
};
