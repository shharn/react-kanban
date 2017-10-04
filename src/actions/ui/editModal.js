import * as uiActionTypes from '../../types/uiActionTypes';

export const changeCardIdForEditModal = (cardId) => {
    return {
        type: uiActionTypes.CHANGE_CARDID_FOR_EDIT_MODAL,
        payload: {
            cardId
        }
    }
}

export const toggleTitleEditMode = () => {
    return {
        type: uiActionTypes.TOGGLE_TITLE_EDIT_MODE
    }
}

export const toggleDescriptionEditMode = () => {
    return {
        type: uiActionTypes.TOGGLE_DESCRIPTION_EDIT_MODE
    }
}

export const toggleDuedateEditMode = () => {
    return {
        type: uiActionTypes.TOGGLE_DUEDATE_EDIT_MODE
    }
}

export const changeEditableCheckListItemId = (targetItemId) => {
    return {
        type: uiActionTypes.CHANGE_EDITABLE_CHECKLISTITEM_ID,
        payload: {
            targetItemId
        }
    }
}

export const toggleAddCheckListItemEditMode = () => {
    return {
        type: uiActionTypes.TOGGLE_ADD_CHECKLISTITEM_EDIT_MODE
    }
}
