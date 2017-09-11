import * as cardAction from '../types/cardActionType';
import api from '../data/api';

export const addCard = (laneId, title) => {
    return {
        type:cardAction.ADD_CARD,
        laneId: laneId,
        title: title
    };
};

export const getAllCards = () => {
    return {
        type: cardAction.GET_ALL_CARDS
    };
};