import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import ChannelIconContainer from './channel/channel_icon_container';
import VideoIndexContainer from './videos/video_index_container';

export default () => {
  return (
    <div className="fake-channel-background">
      <NavbarContainer />
      <img className="channel-banner" src={window.defaultBanner} />
      <div className="channel-user-info">
        <ChannelIconContainer />
        <button className="channel-button-left">CUSTOMIZE CHANNEL</button>
        <button className="channel-button-right">MANAGE VIDEOS</button>
      </div>
      <VideoIndexContainer page={'channel'} />
    </div>
  );
};
