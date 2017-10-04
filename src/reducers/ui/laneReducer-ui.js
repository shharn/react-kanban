import * as uiActionTypes from '../../types/uiActionTypes';
import laneUiState from '../../data/ui/lane';

const reducer = (state = laneUiState, action) => {
    let { payload } = action;
    switch(action.type) {
        case uiActionTypes.CHANGE_EDITABLE_ADD_CARD: {
            let { laneId } = payload;
            return {
                ...state,
                currentEditableAddCard: laneId
            }
        }
        default:
            return state;
    }
}

export default reducer;