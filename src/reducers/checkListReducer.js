import * as CheckListItemActionType from '../types/checkListActionType';
import api from '../data/api';

const checkListItems = (state = api.getCheckListItems(), action) => {
    switch (action.type) {
        case CheckListItemActionType.ADD_CHECKLISTITEM:
            api.addCheckListItem(action.cardId, action.content);
            return Object.assign([], api.getCheckListItems());
        case CheckListItemActionType.REFLECT_CHECKLISTITEM_INPUT_CHANGE:
            return state;
        case CheckListItemActionType.REMOVE_CHECKLISTITEM:
            return state;
        case CheckListItemActionType.UPDATE_CHECKLISTITEM:
            let { id, content, isDone } = action;
            return state.map((item) => {
                if (item.id !== id) {
                    return item;
                }
                return {
                    id,
                    content,
                    isDone
                };
            });
        default:
            return state;
    }
}

export default checkListItems;