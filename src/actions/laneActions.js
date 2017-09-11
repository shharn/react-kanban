import * as laneAction from '../types/laneActionType';

export const toggleEditableCard = (laneId) => {
    return {
        type: laneAction.TOGGLE_EDITABLE_CARD,
        targetLaneId: laneId
    };
};