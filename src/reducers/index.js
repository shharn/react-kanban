import { combineReducers } from 'redux';
import * as cardActionType from '../types/cardActionType';
import api from '../data/api';


const cards = (state = api.getAllCards(), action) => {
    switch (action.type) {
        case cardActionType.ADD_CARD:
            return state;
        case cardActionType.GET_ALL_CARDS:
            return state;
        default:
            return state;
    }
}

const lanes = (state = api.getAllLanes(), action) => {
    switch(action.type) {
        case laneActionType.TOGGLE_ADDCARD:
            return [
                ...state,
                { state[action.targetLaneId].isEditing: !state[action.targetLaneId].isEditing }
            ];
        default:
            return state;
    }
}

const rootReducer = combineReducers({ cards });

export default rootReducer;