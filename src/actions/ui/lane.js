import * as uiActionTypes from '../../types/uiActionTypes';

export const changeEditableAddCard = (laneId) => {
    return {
        type: uiActionTypes.CHANGE_EDITABLE_ADD_CARD,
        payload: {
            laneId
        }
    }
}