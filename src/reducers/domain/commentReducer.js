import * as domainActionTypes from '../../types/domainActionTypes';
import comments from '../../data/domain/comments';

const reducer = (state = comments, action) => {
    let { payload } = action;
    switch(action.type) {
        case domainActionTypes.ADD_COMMENT:
            return state.concat(payload.comment);
        case domainActionTypes.UPDATE_COMMENT:
            return state.map(comment => {
                if (comment.id !== payload.comment.id) {
                    return comment;
                }
                return {
                    ...payload.comment
                }
            })
        case domainActionTypes.DELETE_COMMENT:
            return state.filter(comment => comment.id !== payload.id);
        default:
            return state;
    }
}

export default reducer;