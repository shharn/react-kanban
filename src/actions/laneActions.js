import * as laneAction from '../types/laneActionType';

export const toggleEditableCard = (laneId, currentEditing) => {
    return {
        type: laneAction.TOGGLE_EDITABLE_CARD,
        targetLaneId: laneId,
        isEditing: !currentEditing
    };
};

export const inputContentChanged = (laneId, newInputContent) => {
    return {
        type: laneAction.INPUT_CONTENT_CHANGED,
        targetLaneId: laneId,
        inputContent: newInputContent
    }
};