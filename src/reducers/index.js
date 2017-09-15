import { combineReducers } from 'redux';
import * as cardActionType from '../types/cardActionType';
import * as laneActionType from '../types/laneActionType';
import api from '../data/api';
import cards from './cardReducer';
import lanes from './laneReducer';
import kanbanboard from './kanbanReducer';

const kanbanReducer = combineReducers({ cards, lanes, kanbanboard });

export default kanbanReducer;