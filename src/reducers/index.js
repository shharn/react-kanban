import { combineReducers } from 'redux';
import * as cardActionType from '../types/cardActionType';
import * as laneActionType from '../types/laneActionType';
import * as kanbanboardActionType from '../types/kanbanboardActionType';
import api from '../data/api';

const cards = (state = api.getAllCards(), action) => {
    switch (action.type) {
        case cardActionType.ADD_CARD:
            api.addCard(action.title, action.laneId);
            return Object.assign([], api.getAllCards());
        case cardActionType.GET_ALL_CARDS:
            return state;
        case cardActionType.EDIT_CARD:
            let clone = [...state];
            let updatedCard = clone.find(card => card.id === action.card.id);
            updatedCard.title = action.card.title;
            return clone;
        default:
            return state;
    }
}

const lanes = (state = api.getAllLanes(), action) => {
    let { targetLaneId, inputContent, isEditing }  = action;
    switch(action.type) {
        case laneActionType.TOGGLE_EDITABLE_CARD:
            return Object.assign({}, state, {
                [targetLaneId] : {
                    isEditing: action.isEditing,
                    inputContent: ""
                }
            });
        case laneActionType.INPUT_CONTENT_CHANGED:
            return Object.assign({}, state, {
                [targetLaneId]: {
                    inputContent: inputContent,
                    isEditing: true
                }
            });
        default:
            return state;
    }
}

const kanbanboard = (state = api.getKanbanboardStates(), action) => {
    let { isEditMode } = state;
    switch(action.type) {
        case kanbanboardActionType.TOGGLE_CARD_EDIT_MODE:
            return Object.assign({}, state, {
                isEditMode: !isEditMode,
                card: action.card
            });
        case kanbanboardActionType.REFLECT_INPUT_CHANGE:
            return Object.assign({}, state, {
                card : {
                    title: action.text
                }
            });
        default:
            return state;
    }
}

const kanbanReducer = combineReducers({ cards, lanes, kanbanboard });

export default kanbanReducer;