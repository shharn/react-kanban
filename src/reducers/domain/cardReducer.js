import * as domainActionTypes from '../../types/domainActionTypes';
import cards from '../../data/domain/cards';

let nextCardId = 5;

const reducer = (state = cards, action) => {
    let { payload } = action;
    switch(action.type) {
        case domainActionTypes.ADD_CARD:
            payload.card.id = nextCardId++;
            return state.concat(payload.card);
        case domainActionTypes.DELETE_CARD:
            return state.filter(card => card.id !== payload.id);
        case domainActionTypes.UPDATE_CARD:
            return state.map(card => {
                if (card.id !== payload.card.id) {
                    return card;
                }
                return {
                    ...payload.card
                }
            });
        case domainActionTypes.ADD_CHECKLISTITEM:
            return state.map(card => {
                if (card.id !== payload.cardId) {
                    return card;
                }
                return {
                    ...card,
                    checkListItems: card.checkListItems.concat(payload.item.id)
                }
            })
        case domainActionTypes.ADD_COMMENT:
            return state.map(card => {
                if (card.id !== payload.cardId) {
                    return card;
                }
                return {
                    ...card,
                    comments: card.comments.concat(payload.comment.id)
                }
            })
        case domainActionTypes.DELETE_COMMENT:
            return state.map(card => {
                if (card.id !== payload.cardId) {
                    return card;
                }
                return {
                    ...card,
                    comments: card.comments.filter(comment => comment.id !== payload.commentId)
                }
            })
        default:
            return state;
    }
}

export default reducer;