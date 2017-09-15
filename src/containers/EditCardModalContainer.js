import { connect } from 'react-redux';
import EditCardModal from '../components/EditCardModal';
import { toggleCardEditMode, toggleTitleEditMode, toggleDescriptionEditMode, toggleDueDateEditMode,
    reflectTitleInputChange, reflectDescriptionInputChange, reflectDueDateInputChange } from '../actions/kanbanboardActions';
import { updateTitle, updateDescription, updateDueDate } from '../actions/cardActions';
//import { editCard } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    isEditMode: state.kanbanboard.isEditMode,
    editModeContent: state.kanbanboard.editModeContent
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //handleInputChange: (text) => dispatch(reflectInputChange(text)),
    toggleCardEditMode: (card) => dispatch(toggleCardEditMode(card)),
    toggleTitleEditMode: () => dispatch(toggleTitleEditMode()),
    toggleDescriptionEditMode: () => dispatch(toggleDescriptionEditMode()),
    toggleDueDateEditMode: () => dispatch(toggleDueDateEditMode()),
    reflectTitleInputChange: (title) => dispatch(reflectTitleInputChange(title)),
    reflectDescriptionInputChange: (description) => dispatch(reflectDescriptionInputChange(description)),
    reflectDueDateInputChange: (dueDate) => dispatch(reflectDueDateInputChange(dueDate)),
    updateTitle: (cardId, title) => dispatch(updateTitle(cardId, title)),
    updateDescription: (cardId, description) => dispatch(updateDescription(cardId, description)),
    updateDueDate: (cardId, dueDate) => dispatch(updateDueDate(cardId, dueDate))
    //saveCard: (card) => dispatch(editCard(card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardModal);