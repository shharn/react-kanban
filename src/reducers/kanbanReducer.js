import api from '../data/api';
import * as kanbanboardActionType from '../types/kanbanboardActionType';

const kanbanboard = (state = api.getKanbanboardStates(), action) => {
  let { isEditMode, card } = state;
  switch(action.type) {
      case kanbanboardActionType.TOGGLE_CARD_EDIT_MODE:
          return Object.assign({}, state, {
              isEditMode: !isEditMode,
              editModeContent : {
                  card: action.card
              }
          });
    //   case kanbanboardActionType.REFLECT_INPUT_CHANGE:
    //       return Object.assign({}, state, {
    //           card : {
    //               id: card.id,
    //               title: action.text,
    //               laneId: card.laneId
    //           }
    //       });
      case kanbanboardActionType.TOGGLE_TITLE_EDIT_MODE:
          let currentEditMode = state.editModeContent.isTitleEditable;
          return {
              ...state,
              ...state.editModeContent, 
              editModeContent : {
                isTitleEditable: !currentEditMode
              }
          };
      case kanbanboardActionType.TOGGLE_DESCRIPTION_EDIT_MODE:
          let currentEditMode = state.editModeContent.isDescriptionEditable;
          return {
              ...state,
              ...editModeContent,
              editModeContent: {
                  isDesciptionEditable: !currentEditMode
              }
          };
      default:
          return state;
  }
}

export default kanbanboard;