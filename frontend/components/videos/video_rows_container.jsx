import { connect } from 'react-redux';
import VideoRows from './video_rows';
import { fetchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities }) => {
  return {
    videos: Object.values(entities.videos),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchVideos: () => dispatch(fetchVideos()),
  };
};

export default withRouter(connect(mSTP, mDTP)(VideoRows));
