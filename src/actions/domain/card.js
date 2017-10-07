import * as domainActionTypes from '../../types/domainActionTypes';

export const addCard = (card, laneId) => {
    return {
        type: domainActionTypes.ADD_CARD,
        payload: {
            card, 
            laneId
        }
    }
}

export const updateCard = (card) => {
    return {
        type: domainActionTypes.UPDATE_CARD,
        payload: {
            card
        }
    }
}

export const deleteCard = (id, laneId) => {
    return {
        type: domainActionTypes.DELETE_CARD,
        payload: {
            id,
            laneId
        }
    }
}

