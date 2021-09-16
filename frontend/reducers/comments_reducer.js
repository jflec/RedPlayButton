import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';
const commentsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_VIDEO:
      return action.video.comments;
    case RECEIVE_COMMENT:
      newState.unshift(action.comment);
      return newState;
    case DELETE_COMMENT:
      return newState.filter((comment) => comment.id != action.commentId);
    default:
      return state;
  }
};

export default commentsReducer;
