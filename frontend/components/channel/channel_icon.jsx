import React from 'react';

class ChannelIcon extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div className="channel-pfp-div">
        {currentUser.profile_picture_url ? (
          <img
            className="channel-pfp"
            src={currentUser.profile_picture_url}
          ></img>
        ) : (
          <img className="channel-pfp" src={window.defaultPFP} />
        )}
        <h2 className="channel-username">{currentUser.username}</h2>
      </div>
    );
  }
}

export default ChannelIcon;
