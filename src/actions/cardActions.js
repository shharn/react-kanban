import * as cardActionType from '../types/cardActionType';
import api from '../data/api';

export const addCard = (laneId, title) => {
    return {
        type:cardActionType.ADD_CARD,
        laneId: laneId,
        title: title
    };
};

export const editCard = (card) => {
    return {
        type: cardActionType.EDIT_CARD,
        card: card
    }
}

export const getAllCards = () => {
    return {
        type: cardActionType.GET_ALL_CARDS
    };
};