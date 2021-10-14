import * as LikeAPIUtil from '../util/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like,
  };
};

export const createLike = (like) => (dispatch) => {
  return LikeAPIUtil.createLike(like).then(
    (like) => dispatch(receiveLike(like)),
    (errors) => console.log(errors.responseText)
  );
};

export const updateLike = (like) => (dispatch) => {
  return LikeAPIUtil.updateLike(like).then(
    (like) => dispatch(receiveLike(like)),
    (errors) => console.log(errors.responseText)
  );
};

export const deleteLike = (like) => (dispatch) => {
  return LikeAPIUtil.deleteLike(like).then(
    (like) => dispatch(receiveLike(like)),
    (errors) => console.log(errors.responseText)
  );
};
