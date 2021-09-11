import {
  RECEIVE_VIDEO_ERRORS,
  CLEAR_VIDEO_ERRORS,
} from '../actions/video_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const videosErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    case CLEAR_VIDEO_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default videosErrorsReducer;
