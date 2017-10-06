import React, { Component } from 'react'
import { connect } from 'react-redux';
import keycode from 'keycode';
import { toggleTitleEditMode } from '../actions/ui/editModal';
import { updateCard } from '../actions/domain/card';
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTitleEditMode: () => dispatch(toggleTitleEditMode()),
    updateTitle: (card) => {
      dispatch(updateCard(card));
      dispatch(toggleTitleEditMode());
    }
  }
}

class EditableCardTitle extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let { card } = this.props;
        let updatedCard = { ...card };
        updatedCard.title = this.textInput.value;
        this.props.updateTitle(updatedCard);
        break;
      case keycode.codes['esc']:
        this.props.toggleTitleEditMode();
        break;
      default:
        break;
    }
  }

  render() {
    let { card } = this.props;
    console.log(card.title);
    return (
      <textarea className="modal-item-title"
        type="text" 
        ref={(input) => this.textInput = input} 
        onKeyUp={this.handleKeyUp} 
        defaultValue={card ? card.title : ""}
        wrap="hard"
        cols="10" />
    )
  }
}

EditableCardTitle.propTypes = {
  card: PropTypes.object.isRequired,
  toggleTitleEditMode: PropTypes.func.isRequired,
  updateTitle: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableCardTitle);