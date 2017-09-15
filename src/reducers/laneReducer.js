import api from '../data/api';
import * as laneActionType from '../types/laneActionType';

const lanes = (state = api.getAllLanes(), action) => {
  let { targetLaneId, inputContent }  = action;
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

export default lanes;