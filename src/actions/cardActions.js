import * as cardActionType from '../types/cardActionType';

export const addCard = (card) => {
    return {
        type:cardActionType.ADD_CARD,
        newCard: card
    };
};

// export const editCard = (card) => {
//     return {
//         type: cardActionType.EDIT_CARD,
//         card: card
//     }
// }
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