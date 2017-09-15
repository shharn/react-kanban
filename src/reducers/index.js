import { combineReducers } from 'redux';
import cards from './cardReducer';
import lanes from './laneReducer';
import kanbanboard from './kanbanReducer';

const kanbanReducer = combineReducers({ cards, lanes, kanbanboard });

export default kanbanReducer;