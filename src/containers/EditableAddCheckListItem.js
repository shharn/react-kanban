import { connect } from 'react-redux'
import { toggleAddCheckListItemEditMode } from '../actions/ui/editModal'
import { addCheckListItem } from '../actions/domain/checkList'
import React, { Component } from 'react'
import keycode from 'keycode'

class EditableAddCheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(keyEvent) {
    let { cardId } = this.props;
    switch(keyEvent.which) {
      case keycode.codes['enter']:
      this.props.addCheckListItem(cardId, this.textInput.value);
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
      <input 
        type="text"
        onKeyUp={this.handleKeyUp}
        ref={(input) => this.textInput = input}
        defaultValue=""/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cardId: ownProps.cardId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    disableEditMode: () => dispatch(toggleAddCheckListItemEditMode()),
    addCheckListItem: (cardId, content) => {
      dispatch(addCheckListItem(cardId, content));
      dispatch(toggleAddCheckListItemEditMode());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableAddCheckListItem)