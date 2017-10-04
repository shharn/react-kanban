import * as uiActionTypes from '../../types/uiActionTypes';
import editModalUiState from '../../data/ui/editModal';

const reducer = (state = editModalUiState, action) => {
    let { payload } = action;
    switch(action.type) {
        case uiActionTypes.TOGGLE_TITLE_EDIT_MODE: 
            return {
                ...state,
                isTitleEditMode: !state.isTitleEditMode
            }
        case uiActionTypes.TOGGLE_DESCRIPTION_EDIT_MODE:
            return {
                ...state,
                isDescriptionEditMode: !state.isDescriptionEditMode
            }
        case uiActionTypes.TOGGLE_DUEDATE_EDIT_MODE:
            return {
                ...state,
                isDuedateEditMode: !state.isDuedateEditMode
            }
        case uiActionTypes.CHANGE_CARDID_FOR_EDIT_MODAL:
            return {
                targetCardId: payload.cardId,
                show: payload.cardId > 0 ? true : false,
                isTitleEditMode: false,
                isDescriptionEditMode: false,
                isDuedateEditMode: false,
                isCheckListItemEditMode: false,
                currentEditableCheckListItemId: -1,
                isAddCheckListItemEditable: false
            }
        case uiActionTypes.CHANGE_EDITABLE_CHECKLISTITEM_ID:
            return {
                ...state,
                isCheckListItemEditMode: payload.targetItemId > 0 ? true : false,
                currentEditableCheckListItemId: payload.targetItemId
            }
        case uiActionTypes.TOGGLE_ADD_CHECKLISTITEM_EDIT_MODE:
            return {
                ...state,
                isAddCheckListItemEditable: !state.isAddCheckListItemEditable
            };
        default:
            return state;
    }
}

export default reducer;