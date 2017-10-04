import * as domainActionTypes from '../../types/domainActionTypes';

export const addComment = (comment) => {
    return {
        type: domainActionTypes.ADD_COMMENT,
        payload: {
            comment
        }
    }
}

export const updateComment = (comment) => {
    return {
        type: domainActionTypes.UPDATE_COMMENT,
        payload: {
            comment
        }
    }
}

export const deleteComment = (commentId, cardId) => {
    return {
        type: domainActionTypes.DELETE_CARD,
        payload: {
            commentId,
            cardId
        }
    }
}