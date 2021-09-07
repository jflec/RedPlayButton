// import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';
// import { RECEIVE_VIDEO } from '../actions/video_actions';
// import { RECEIVE_LIKE } from '../actions/like_actions';

// const commentsReducer = (state = [], action) => {
//     Object.freeze(state);
//     let newState = [...state]
//     switch (action.type) {
//         case RECEIVE_VIDEO:
//             return action.video.comments
//         case RECEIVE_COMMENT:
//             newState.unshift(action.comment);
//             return newState;
//         case DELETE_COMMENT:
//             return newState.filter(comment => comment.id != action.commentId);
//         case RECEIVE_LIKE:
//             if (action.like.likeable_type === "Comment") {
//                 return newState.map((comment) => {
//                     if (comment.id !== action.like.likeable_id) {
//                         return comment
//                     }
//                     comment.like = action.like
//                     return comment
//                 })
//             } else { return state; }
//             break;

//         default:
//             return state;
//     }
// }

// export default commentsReducer;