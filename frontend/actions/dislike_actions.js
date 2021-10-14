import * as DislikeAPIUtil from '../util/dislike_util'

export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";

const receiveDislike = (dislike) => {
    return {
        type: RECEIVE_DISLIKE,
        dislike
    }
}

export const createDislike = (dislike) => (dispatch) => {
    return (
        DislikeAPIUtil.createDislike(dislike)
            .then(
                (dislike) => dispatch(receiveDislike(dislike)),
                (errors) => console.log(errors.responseText)
            )
    )
}

export const updateDislike = (dislike) => (dispatch) => {
    return (
        DislikeAPIUtil.updateDislike(dislike)
            .then(
                (dislike) => dispatch(receiveDislike(dislike)),
                (errors) => console.log(errors.responseText)
            )
    )
}

export const deleteDislike = (dislike) => (dispatch) => {
    return (
        DislikeAPIUtil.deleteDislike(dislike)
            .then(
                (dislike) => dispatch(receiveDislike(dislike)),
                (errors) => console.log(errors.responseText)
            )
    )
}