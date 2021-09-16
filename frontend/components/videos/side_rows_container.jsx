import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';
import SideRows from './side_rows';

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

export default withRouter(connect(mSTP, mDTP)(SideRows));
