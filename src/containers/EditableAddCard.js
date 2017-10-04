import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeEditableAddCard } from '../actions/ui/lane';
import { addCard } from '../actions/domain/card';
import keycode from 'keycode';

class EditableAddCard extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let card = {
          title: this.textInput.value,
          description: "",
          dueDate: "",
          comments: [],
          checkListItems: [],
        };
        this.props.addCard(card, this.props.laneId);
        break;
      case keycode.codes['esc']:
        this.props.disableEditMode();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="addCard">
        <input 
          type="text" placeholder="Enter the content" 
          onKeyUp={this.handleKeyUp} 
          ref={(input) => this.textInput = input}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    laneId: ownProps.laneId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (title, laneId) => {
      dispatch(addCard(title, laneId));
      dispatch(changeEditableAddCard(null));
    },
    disableEditMode: () => dispatch(changeEditableAddCard(null))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAddCard)