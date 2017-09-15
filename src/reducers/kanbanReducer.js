import api from '../data/api';
import * as kanbanboardActionType from '../types/kanbanboardActionType';

const kanbanboard = (state = api.getKanbanboardStates(), action) => {
  let { isEditMode, editModeContent } = state;
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
          return {
              ...state,
              editModeContent : {
                ...state.editModeContent,
                isTitleEditable: !editModeContent.isTitleEditable
              }
          };
      case kanbanboardActionType.TOGGLE_DESCRIPTION_EDIT_MODE:
          return {
              ...state,
              editModeContent: {
                  ...state.editModeContent,
                  isDescriptionEditable: !editModeContent.isDescriptionEditable
              }
          };
      case kanbanboardActionType.TOGGLE_DUEDATE_EDIT_MODE: 
          return {
              ...state,
              editModeContent: {
                  ...state.editModeContent,
                  isDueDateEditable: !editModeContent.isDueDateEditable
              }
          };
      case kanbanboardActionType.REFLECT_TITLE_INPUT_CHANGE:
          return {
              ...state,
              editModeContet: {
                  ...state.editModeContent,
                  card: {
                      ...state.editModeContent.card,
                      title: action.title
                  }
              }
          }
      case kanbanboardActionType.REFLECT_DESCRIPTION_INPUT_CHANGE:
          return {
              ...state,
              editModeContent: {
                  ...state.editModeContent,
                  card: {
                      ...state.editModeContent.card,
                      description: action.description
                  }
              }
          }
      case kanbanboardActionType.REFLECT_DUEDATE_INPUT_CHANGE:
          return {
              ...state,
              editModeContent: {
                  ...state.editModeContent,
                  card: {
                      ...state.editModeContent.card,
                      dueDate: action.dueDate
                  }
              }
          }
      default:
          return state;
  }
}

export default kanbanboard;