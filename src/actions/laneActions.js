import * as laneAction from '../types/laneActionType';

export const toggleEditableCard = (laneId, currentEditMode) => {
    return {
        type: laneAction.TOGGLE_EDITABLE_CARD,
        targetLaneId: laneId,
        nextEditMode: !currentEditMode
    };
};

export const reflectAddCardInputChange = (laneId, newInputContent) => {
    return {
        type: laneAction.INPUT_CONTENT_CHANGED,
        targetLaneId: laneId,
        inputContent: newInputContent
    }
};