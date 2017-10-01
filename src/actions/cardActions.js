import * as cardActionType from '../types/cardActionType';

export const addCard = (card) => {
    return {
        type:cardActionType.ADD_CARD,
        newCard: card
    };
};

export const updateTitle = (cardId, title) => {
    return {
        type: cardActionType.UPDATE_TITLE,
        cardId,
        title
    }
};

export const updateDescription = (cardId, description) => {
    return {
        type: cardActionType.UPDATE_DESCRIPTION,
        cardId,
        description
    }
};

export const updateDueDate = (cardId, dueDate) => {
    return {
        type: cardActionType.UPDATE_DUEDATE,
        cardId,
        dueDate
    }
};

export const updateCheckListEditTarget = (cardId, checkListItemId) => {
    return {
        type: cardActionType.UPDATE_CHECKLIST_EDIT_TARGET,
        cardId,
        checkListItemId
    }
};

export const getAllCards = () => {
    return {
        type: cardActionType.GET_ALL_CARDS
    };
};

export const deleteCard = (cardId) => {
    return {
        type: cardActionType.DELETE_CARD,
        cardId
    }
};