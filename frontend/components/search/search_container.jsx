import { connect } from 'react-redux';
import Search from './search';
import { searchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mDTP = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default withRouter(connect(null, mDTP)(Search));
