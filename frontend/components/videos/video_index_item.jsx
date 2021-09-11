import React from 'react';
import { withRouter } from 'react-router';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.watchVideo = this.watchVideo.bind(this);
    this.reffered = React.createRef();
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
          <img
            onClick={this.watchVideo}
            className="video-index-thumbnail"
            src={video.thumbURL ? video.thumbURL : window.defaultThumbnail}
          />
          <div className="video-display">
            <img
              className="user-icon-bigger"
              src={video.user.profile_image_url}
            />
            <div className="video-info">
              <h3 onClick={this.watchVideo}>{video.title}</h3>
              <p className="uploader-info">{video.user.username}</p>
            </div>
            {video.user.id === this.props.currentUserId &&
            this.props.showTrash ? (
              <div id="trash-grow">
                <div
                  id="trash"
                  onClick={() => this.props.deleteVideo(video.id)}
                ></div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(VideoIndexItem);
