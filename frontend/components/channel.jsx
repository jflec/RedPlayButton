import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import ChannelIconContainer from './channel/channel_icon_container';
import VideoIndexContainer from './videos/video_index_container';

export default () => {
  return (
    <div className="fake-channel-background">
      <NavbarContainer />
      <div className="channel-banner"></div>
      <div className="channel-user-info">
        <ChannelIconContainer />
      </div>
      <VideoIndexContainer page={'channel'} />
    </div>
  );
};
