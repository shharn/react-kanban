import api from '../data/api';
import * as laneActionType from '../types/laneActionType';

const lanes = (state = api.getAllLanes(), action) => {
  let { targetLaneId, nextEditMode, inputContent }  = action;
  switch(action.type) {
      case laneActionType.TOGGLE_EDITABLE_CARD:
          return Object.assign({}, state, {
              [targetLaneId]: {
                  isEditing: nextEditMode,
                  inputContent: ""
              }
          })
        //     ...state,
        //    [targetLaneId]: {
        //        isEditing: nextEditMode,
        //        inputContent: ""
        //    }     
        //   };
      case laneActionType.INPUT_CONTENT_CHANGED:
          return Object.assign({}, state, {
              [targetLaneId]: {
                  ...state[targetLaneId],
                  inputContent
              }
          });
      default:
          return state;
  }
}

export default lanes;