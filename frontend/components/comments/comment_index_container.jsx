import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { deleteComment } from '../../actions/comment_actions';

const mSTP = ({ entities, session }) => {
  return {
    comments: entities.comments,
    userId: session.id,
  };
};

const mDTP = (dispatch) => {
  return {
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};

export default connect(mSTP, mDTP)(CommentIndex);
