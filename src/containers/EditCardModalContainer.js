import { connect } from 'react-redux';
import EditCardModal from '../components/EditCardModal';
import { toggleCardEditMode, toggleTitleEditMode, toggleDescriptionEditMode, toggleDueDateEditMode } from '../actions/kanbanboardActions';
import { updateTitle, updateDescription, updateDueDate } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  let card = state.cards.filter(card => card.id === state.kanbanboard.editModeContent.cardId)[0];
  return {
    isEditMode: state.kanbanboard.isEditMode,
    editModeContent: state.kanbanboard.editModeContent,
    card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCardEditMode: (cardId) => dispatch(toggleCardEditMode(cardId)),
    toggleTitleEditMode: () => dispatch(toggleTitleEditMode()),
    toggleDescriptionEditMode: () => dispatch(toggleDescriptionEditMode()),
    toggleDueDateEditMode: () => dispatch(toggleDueDateEditMode()),
    updateTitle: (cardId, title) => dispatch(updateTitle(cardId, title)),
    updateDescription: (cardId, description) => dispatch(updateDescription(cardId, description)),
    updateDueDate: (cardId, dueDate) => dispatch(updateDueDate(cardId, dueDate))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardModal);