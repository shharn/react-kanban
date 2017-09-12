import { connect } from 'react-redux';
import Card from '../components/Card';
import { toggleEditMode } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: (cardId, isEditing) => dispatch(toggleEditMode(cardId, isEditing))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);