import * as domainActionTypes from '../../types/domainActionTypes';

export const addCheckListItem = (cardId, content) => {
    return {
        type: domainActionTypes.ADD_CHECKLISTITEM,
        payload: {
            content,
            cardId
        }
    }
}

export  const updateCheckListItem = (item) => {
    return {
        type: domainActionTypes.UPDATE_CHECKLISTITEM,
        payload: {
            item
        }
    }
}

export const deleteCheckListItem = (itemId, cardId) => {
    return {
        type: domainActionTypes.DELETE_CHECKLISTITEM,
        payload: {
            itemId,
            cardId
        }
    }
}