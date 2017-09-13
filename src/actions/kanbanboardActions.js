import * as kanbanboardActionType from '../types/kanbanboardActionType';

export const toggleCardEditMode = (card) => {
  return {
    type: kanbanboardActionType.TOGGLE_CARD_EDIT_MODE,
    card
  }
};

export const reflectInputChange = (text) => {
  return {
    type: kanbanboardActionType.REFLECT_INPUT_CHANGE,
    text: text
  }
};