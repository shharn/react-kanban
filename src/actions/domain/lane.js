import * as domainActionTypes from '../../types/domainActionTypes';

export const moveCard = (sourceCardId, targetCardId, sourceLaneId, targetLaneId) => {
  return {
      type: domainActionTypes.MOVE_CARD,
      payload: {
          sourceCardId,
          targetCardId,
          sourceLaneId,
          targetLaneId
      }
  }
}