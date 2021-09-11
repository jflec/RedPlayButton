import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }) => {
  return {
    users: entities.users,
    userId: session.id,
    videos: Object.values(entities.videos),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoIndex));
