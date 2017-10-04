import { combineReducers } from 'redux';
import cards from './domain/cardReducer';
import lanes from './domain/laneReducer';
import checkList from './domain/checkListReducer';
import comments from './domain/commentReducer';
import lane from './ui/laneReducer-ui';
import editModal from './ui/editModalReducer-ui';

const domain = combineReducers({checkList, comments, cards, lanes});
const ui = combineReducers({lane, editModal});
const rootReducer = combineReducers({domain, ui});

export default rootReducer;