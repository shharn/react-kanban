import React, { Component } from 'react'
import { connect} from 'react-redux';
import keycode from 'keycode';
import { toggleDuedateEditMode } from '../actions/ui/editModal';
import { updateCard } from '../actions/domain/card';
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDuedateEditMode: () => dispatch(toggleDuedateEditMode()),
    updateDuedate: (card) => {
      dispatch(updateCard(card));
      dispatch(toggleDuedateEditMode())
    }
  }
}

class EditableCardDuedate extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let { card } = this.props;
        let updatedCard = { ...card };
        updatedCard.dueDate = this.textInput.value;
        this.props.updateDuedate(updatedCard);
        break;
      case keycode.codes['esc']:
        this.props.toggleDuedateEditMode();
        break;
      default:
        break;
    }
  }

  render() {
    let { card } = this.props;
    return (
      <input className="modal-item-duedate" 
        type="text" 
        ref={(input) => this.textInput = input} 
        onKeyUp={this.handleKeyUp} 
        defaultValue={card ? card.dueDate : ""} />    
    )
  }
}

EditableCardDuedate.propTypes = {
  card: PropTypes.object.isRequired,
  toggleDuedateEditMode: PropTypes.object.isRequired,
  updateDuedate: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableCardDuedate);