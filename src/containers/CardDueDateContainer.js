import { connect } from 'react-redux';
import CardDueDate from '../components/CardDueDate';
import { toggleDueDateEditMode, reflectDueDateInputChange } from '../actions/kanbanboardActions';
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
    reflectDueDateInputChange: (inputContent) => dispatch(reflectDueDateInputChange(inputContent)),
    updateDueDate: (cardId, dueDate) => dispatch(updateDueDate(cardId, dueDate))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDueDate);