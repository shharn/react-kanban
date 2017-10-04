import React, { Component } from 'react'
import { connect } from 'react-redux';
import keycode from 'keycode';
import { toggleDescriptionEditMode } from '../actions/ui/editModal';
import { updateCard } from '../actions/domain/card';

class EditableCardDescription extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let { card } = this.props;
        let updatedCard = { ...card };
        updatedCard.description = this.textInput.value;
        this.props.updateDescription(updatedCard);
        break;
      case keycode.codes['esc']:
        this.props.toggleDescriptionEditMode();
        break;
      default:
        break;
    }
  }

  render() {
    let { card } = this.props;
    return (
      <input className="modal-item-description"
        type="text" 
        ref={(input) => this.textInput = input} 
        onKeyUp={this.handleKeyUp} 
        defaultValue={card ? card.description : ""} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDescriptionEditMode: () => dispatch(toggleDescriptionEditMode()),
    updateDescription: (card) => {
      dispatch(updateCard(card));
      dispatch(toggleDescriptionEditMode());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableCardDescription);