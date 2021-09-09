import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }, rProps) => {
  return {
    // videos: Object.values(entities.videos),
    userId: session.id,
    users: entities.users,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
    deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoIndex));
