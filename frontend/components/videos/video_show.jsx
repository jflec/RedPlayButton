import React, { useEffect } from 'react';
import NavbarContainer from '../navbar/navbar_container';
import VideoPlayer from './video_player';
import SideRowsContainer from './side_rows_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';
import { NavLink } from 'react-router-dom';

function VideoShow(props) {
  const { videos, video, userId } = props;

  useEffect(() => {
    if (videos.length <= 1) {
      props.fetchVideos();
    }

    return () => {
      document.title = 'RedPlayButton';
    };
  }, []);

  useEffect(() => {
    props.fetchVideo(props.match.params.videoId, userId).then((res) => {
      document.title = `${res.video.title}`;
    });
    return () => {
      document.title = 'RedPlayButton';
    };
  }, [props.match.params.videoId]);

  if (video) {
    return (
      <div className="fake-background">
        <NavbarContainer />
        <div className="total-page">
          <div className="half-page">
            <div className="video-player-container">
              <div className="video-holder">
                <VideoPlayer
                  URL={video.videoURL}
                  id={video.id}
                  max={videos.length}
                />
              </div>
              <div className="video-details-container">
                <p className="video-title">{video.title}</p>
                <div className="video-channel-details">
                  <NavLink exact to={`/c/${video.user.username}`}>
                    {video.user.profile_picture_url ? (
                      <img
                        className="user-icon-large"
                        src={video.user.profile_picture_url}
                      ></img>
                    ) : (
                      <img
                        className="user-icon-large"
                        src={window.defaultPFP}
                      />
                    )}
                  </NavLink>
                  <p className="video-channel">
                    {video.user.username}
                    <br></br>
                    <br></br>
                    <br></br>
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
            <CommentFormContainer />
            <CommentIndexContainer />
          </div>
          <SideRowsContainer />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default VideoShow;
