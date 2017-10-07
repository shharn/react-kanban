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
      return {
        ...state,
        [payload.from]: {
          cards: state[payload.from].cards.filter(cardId => cardId !== payload.cardId)
        },
        [payload.to]: {
          cards: state[payload.to].cards.concat(payload.cardId)
        }
      }
    default: 
      return state;
  }
}

export default reducer;