import * as domainActionTypes from '../../types/domainActionTypes';

export const moveCard = (cardId, from, to) => {
  return {
      type: domainActionTypes.MOVE_CARD,
      payload: {
          cardId,
          from,
          to
      }
  }
}