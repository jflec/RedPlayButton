import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/video_actions';

const mSTP = ({ entities, session }, rProps) => {
  return {
    videos: Object.keys(entities.videos),
    video: entities.videos[rProps.match.params.videoId],
    userId: session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: (videoId, userId) => dispatch(fetchVideo(videoId, userId)),
  };
};

export default connect(mSTP, mDTP)(VideoShow);
