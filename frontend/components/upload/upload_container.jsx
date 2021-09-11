import { connect } from 'react-redux';
import Upload from './upload';
import { withRouter } from 'react-router';
import { postVideo, clearErrors } from '../../actions/video_actions';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.videos,
  };
};

const mDTP = (dispatch) => {
  return {
    postVideo: (formData) => dispatch(postVideo(formData)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(mSTP, mDTP)(Upload));
