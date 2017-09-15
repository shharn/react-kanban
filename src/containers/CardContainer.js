import { connect } from 'react-redux';
import Card from '../components/Card';
import { toggleCardEditMode } from '../actions/kanbanboardActions';
import { deleteCard } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: (card) => dispatch(toggleCardEditMode(card)),
    deleteCard: (cardId) => dispatch(deleteCard(cardId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);