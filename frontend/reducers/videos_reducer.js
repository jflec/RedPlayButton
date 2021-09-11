import {
  DELETE_VIDEO,
  RECEIVE_VIDEO,
  RECEIVE_ALL_VIDEOS,
} from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      const video = Object.assign({}, action.video);
      delete video.comments;
      return Object.assign({}, state, { [action.video.id]: video });
    case DELETE_VIDEO:
      delete newState[action.videoId];
      return newState;
    default:
      return state;
  }
};

export default videosReducer;
