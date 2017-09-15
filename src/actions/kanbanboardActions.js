import * as kanbanboardActionType from '../types/kanbanboardActionType';

export const toggleCardEditMode = (card) => {
  return {
    type: kanbanboardActionType.TOGGLE_CARD_EDIT_MODE,
    card
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

export const reflectTitleInputChange = (title) => {
  return {
    type: kanbanboardActionType.REFLECT_TITLE_INPUT_CHANGE,
    title
  }
};

export const reflectDescriptionInputChange = (description) => {
  return {
    type: kanbanboardActionType.REFLECT_DESCRIPTION_INPUT_CHANGE,
    description
  }
};

export const reflectDueDateInputChange = (dueDate) => {
  return {
    type: kanbanboardActionType.REFLECT_DUEDATE_INPUT_CHANGE,
    dueDate
  }
};

// export const reflectInputChange = (text) => {
//   return {
//     type: kanbanboardActionType.REFLECT_INPUT_CHANGE,
//     text: text
//   }
// };