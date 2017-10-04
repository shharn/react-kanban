import { connect } from 'react-redux';
import Card from '../components/Card';
import { changeCardIdForEditModal } from '../actions/ui/editModal';
import { deleteCard } from '../actions/domain/card';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    laneId: ownProps.laneId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showEditModal: (cardId) => dispatch(changeCardIdForEditModal(cardId)),
    deleteCard: (cardId, laneId) => dispatch(deleteCard(cardId, laneId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);