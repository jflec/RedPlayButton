import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.reffered = React.createRef();
    this.watchVideo = this.watchVideo.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.togglePause = this.togglePause.bind(this);
  }

  watchVideo(e) {
    this.props.history.replace(`/watch/${this.props.video.id}`);
  }

  togglePlay(e) {
    this.reffered.current.play();
  }

  togglePause(e) {
    this.reffered.current.currentTime = 0;
    this.reffered.current.pause();
  }

  render() {
    const { video } = this.props;
    if (video) {
      return (
        <div className="video-index-item">
          <video
            onClick={this.watchVideo}
            className="video-index-thumbnail"
            src={video.videoURL}
            loop={true}
            muted
            onMouseOver={(event) => (
              (event.target.currentTime = 0), event.target.play()
            )}
            onMouseOut={(event) => (
              (event.target.currentTime = 0), event.target.pause()
            )}
          ></video>
          <div className="video-display">
            <NavLink exact to={`/c/${video.user.username}`}>
              {!video.user.profile_picture_url ? (
                <img src={window.defaultPFP} className="user-icon-medium" />
              ) : (
                <img
                  className="user-icon-medium"
                  src={video.user.profile_picture_url}
                />
              )}
            </NavLink>
            <div className="video-info">
              <h3 onClick={this.watchVideo}>{video.title}</h3>
              <p className="uploader-info">{`${video.user.username}`}</p>

              <p className="index-view-count">{`${video.viewsCount} views • ${video.date}`}</p>
            </div>
            {video.user.id === this.props.currentUserId &&
            this.props.deleteVideoButton ? (
              <div
                className="delete-video-icon"
                onClick={() => this.props.deleteVideo(video.id)}
              ></div>
            ) : null}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(VideoIndexItem);
