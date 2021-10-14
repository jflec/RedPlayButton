import {
    DELETE_VIDEO,
    RECEIVE_VIDEO,
    RECEIVE_ALL_VIDEOS,
} from '../actions/video_actions';
import {
    RECEIVE_LIKE
} from '../actions/like_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;

        case RECEIVE_VIDEO:
            const video = Object.assign({}, action.video)
            delete video.comments
            return Object.assign({}, state, { [action.video.id]: video });

        case DELETE_VIDEO:
            delete newState[action.videoId];
            return newState

        case RECEIVE_LIKE:
            if (action.like.likeable_type === "Video") {
                newState[action.like.likeable_id].like = action.like;
                return newState;
            } else {
                return state;
            }
            break;

        default:
            return state;
    }
}

export default videosReducer;