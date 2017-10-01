import { connect } from 'react-redux';
import CardDescription from '../components/CardDescription';
import { toggleDescriptionEditMode } from '../actions/kanbanboardActions';
import { updateDescription } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    isDescriptionEditable: ownProps.isDescriptionEditable
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDescriptionEditMode: () => dispatch(toggleDescriptionEditMode()),
    updateDescription: (cardId, description) => dispatch(updateDescription(cardId, description))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDescription);