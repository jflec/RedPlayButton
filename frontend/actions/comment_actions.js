import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

export const createComment = (comment) => (dispatch) => {
  return CommentAPIUtil.createComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => console.log(errors.responseText)
  );
};

export const updateComment = (comment) => (dispatch) => {
  return CommentAPIUtil.updateComment(comment).then(
    (comment) => dispatch(receiveComment(comment)),
    (errors) => console.log(errors.responseText)
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return CommentAPIUtil.deleteComment(commentId).then(
    (commentId) => dispatch(removeComment(commentId)),
    (errors) => console.log(errors.responseText)
  );
};
