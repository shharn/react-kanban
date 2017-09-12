import { combineReducers } from 'redux';
import * as cardActionType from '../types/cardActionType';
import * as laneActionType from '../types/laneActionType';
import api from '../data/api';

const cards = (state = api.getAllCards(), action) => {
    switch (action.type) {
        case cardActionType.ADD_CARD:
            api.addCard(action.title, action.laneId);
            return Object.assign([], api.getAllCards());
        case cardActionType.GET_ALL_CARDS:
            return state;
        case cardActionType.TOGGLE_CARD_EDIT_MODE:
            let newState = [...state];
            newState[action.cardId].isEditing = action.isEditing;
            return newState;
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

const kanbanReducer = combineReducers({ cards, lanes });

export default kanbanReducer;