import * as domainActionTypes from '../../types/domainActionTypes';
import lanes from '../../data/domain/lanes';

let reducer = (state = lanes, action) => {
  let { payload } = action;
  switch(action.type) {
    case domainActionTypes.ADD_CARD:
      return {
        ...state,
        [payload.laneId]: {
          cards: state[payload.laneId].cards.concat(payload.card.id)
        }
      }
    case domainActionTypes.DELETE_CARD:
      return {
        ...state,
        [payload.laneId]: {
          cards: state[payload.laneId].cards.filter(cardId => cardId !== payload.id)
        }
      }
    case domainActionTypes.MOVE_CARD:
      let { sourceCardId, sourceLaneId, targetCardId, targetLaneId } = payload;
      let targetPos = state[targetLaneId].cards.findIndex(cardId => cardId === targetCardId);
      if (sourceLaneId === targetLaneId) {
        let cards = state[targetLaneId].cards.filter(cardId => cardId !== sourceCardId);
        if (targetCardId === -1) {
          cards.push(sourceCardId);
        } else {
          cards.splice(targetPos, 0, sourceCardId);
        }
        return {
          ...state,
          [targetLaneId]: {
            cards
          }
        }
      } else {
        let addedLaneCards = state[targetLaneId].cards.slice();
        if (targetCardId !== -1) { // 리스트의 마지막에 push 되는 경우인가? (in AddCard Component)
          addedLaneCards.splice(targetPos, 0, sourceCardId);
        } else {
          addedLaneCards.push(sourceCardId);
        }
        return {
          ...state,
          [sourceLaneId]: {
            cards: state[sourceLaneId].cards.filter(cardId => cardId !== sourceCardId)
          },
          [targetLaneId]: {
            cards: addedLaneCards
          }
        }
      }
    default: 
      return state;
  }
}

export default reducer;