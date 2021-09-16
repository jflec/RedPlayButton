import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, updateComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router';

const mSTP = ({ entities, session }, rProps) => {
  return {
    user: entities.users[session.id],
    video_id: rProps.match.params.videoId,
  };
};

const mDTP = (dispatch) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
  };
};

export default withRouter(connect(mSTP, mDTP)(CommentForm));
