import * as domainActionTypes from '../../types/domainActionTypes';
import checkListItems from '../../data/domain/checkListItems';

const reducer = (state = checkListItems, action) => {
    let { payload } = action;
    switch(action.type) {
        case domainActionTypes.ADD_CHECKLISTITEM:
            return state.concat(payload.item);
        case domainActionTypes.UPDATE_CHECKLISTITEM:
            return state.map(item => {
                if (item.id !== payload.item.id) {
                    return item;
                }
                return {
                   ...payload.item
                }
            })
        case domainActionTypes.DELETE_CHECKLISTITEM:
            return state.filter(item => item.id !== payload.itemId);
        default:
            return state;
    }
}

export default reducer;