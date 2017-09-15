import api from '../data/api';
import * as cardActionType from '../types/cardActionType';

const cards = (state = api.getAllCards(), action) => {
  switch (action.type) {
      case cardActionType.ADD_CARD:
        api.addCard(action.title, action.laneId);
        return Object.assign([], api.getAllCards());
      case cardActionType.GET_ALL_CARDS:
        return state;
      case cardActionType.EDIT_CARD:
        return state.map( (card) => {
          if (card.id !== action.card.id) {
            return card;
          }
          return {...action.card};
        });
      case cardActionType.DELETE_CARD:
        api.deleteCard(action.cardId);
        return state.filter(card => card.id !== action.cardId);
      default:
        return state;
  }
}

export default cards;