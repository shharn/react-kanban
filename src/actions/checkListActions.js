import * as CheckListItemActionType from '../types/checkListActionType';

export const updateCheckListItem = (id, content, isDone) => {
    return {
        type: CheckListItemActionType.UPDATE_CHECKLISTITEM,
        id,
        content,
        isDone
    }
}

export const removeCheckListItem = (id) => {
    return {
        type: CheckListItemActionType.REMOVE_CHECKLISTITEM,
        id
    }
};

export const addCheckListIem =(cardId, content) => {
    return {
        type: CheckListItemActionType.ADD_CHECKLISTITEM,
        cardId,
        content
    }
}