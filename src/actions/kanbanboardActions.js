import * as kanbanboardActionType from '../types/kanbanboardActionType';

export const toggleCardEditMode = (cardId) => {
  return {
    type: kanbanboardActionType.TOGGLE_CARD_EDIT_MODE,
    cardId
  }
};

export  const toggleTitleEditMode = () => {
  return {
    type: kanbanboardActionType.TOGGLE_TITLE_EDIT_MODE
  }
};

export const toggleDescriptionEditMode = () => {
  return {
    type: kanbanboardActionType.TOGGLE_DESCRIPTION_EDIT_MODE
  }
};

export const toggleDueDateEditMode = () => {
  return {
    type: kanbanboardActionType.TOGGLE_DUEDATE_EDIT_MODE
  }
};