import { connect } from 'react-redux';
import CardDueDate from '../components/CardDueDate';
import { toggleDueDateEditMode } from '../actions/kanbanboardActions';
import { updateDueDate } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    isDueDateEditable: ownProps.isDueDateEditable
  };
};

const mapDispatchToProps = (dispatch )=> {
  return {
    toggleDueDateEditMode: () => dispatch(toggleDueDateEditMode()),
    updateDueDate: (cardId, dueDate) => dispatch(updateDueDate(cardId, dueDate))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDueDate);