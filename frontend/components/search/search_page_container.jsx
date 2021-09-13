import { connect } from 'react-redux';
import SearchPage from './search_page';
import { searchVideos } from '../../actions/video_actions';

const mSTP = ({ entities }) => {
  return {
    videos: entities.videos,
  };
};

const mDTP = (dispatch) => {
  return {
    searchVideos: (query) => dispatch(searchVideos(query)),
  };
};

export default connect(mSTP, mDTP)(SearchPage);
