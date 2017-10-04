import { connect } from 'react-redux';
import EditCardModal from '../components/EditCardModal';
import { changeCardIdForEditModal } from '../actions/ui/editModal';

const mapStateToProps = (state, ownProps) => {
  let uiState = state.ui.editModal;
  let targetCardId = uiState.targetCardId;
  let card = uiState.show ? state.domain.cards.filter(card => card.id === targetCardId)[0] : null;
  return {
    uiState,
    card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    disableEditModal: () => dispatch(changeCardIdForEditModal(-1)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardModal);