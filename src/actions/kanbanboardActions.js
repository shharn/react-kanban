import * as kanbanboardAction from '../types/kanbanboardActionType';

export const toggleCardEditMode = () => {
  return {
    type: kanbanboardAction.TOGGLE_CARD_EDIT_MODE
  }
}