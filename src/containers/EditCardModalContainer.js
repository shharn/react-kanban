import { connect } from 'react-redux';
import EditCardModal from '../components/EditCardModal';
import { toggleCardEditMode, reflectInputChange } from '../actions/kanbanboardActions';
import { editCard } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    isEditMode: state.kanbanboard.isEditMode,
    card: state.kanbanboard.card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange: (text) => dispatch(reflectInputChange(text)),
    toggleCardEditMode: (card) => dispatch(toggleCardEditMode(card)),
    saveCard: (card) => dispatch(editCard(card))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardModal);