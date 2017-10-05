import { connect } from 'react-redux'
import { changeEditableCheckListItemId } from '../actions/ui/editModal';
import { updateCheckListItem } from '../actions/domain/checkList';
import React, { Component } from 'react'
import keycode from 'keycode';
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => ({
  item: ownProps.item
})

const mapDispatchToProps = (dispatch) => {
return {
  disableEditMode: () => dispatch(changeEditableCheckListItemId(-1)),
  updateContent: (item) => {
    dispatch(updateCheckListItem(item));
    dispatch(changeEditableCheckListItemId(-1));
  }
}
}

class EditableCheckListItemContent extends Component {
  constructor(props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let updatedItem = { ...this.props.item };
        updatedItem.content = this.textInput.value;
        this.props.updateContent(updatedItem);
        break;
      case keycode.codes['esc']:
        this.props.disableEditMode();
        break;
      default:
        break;
    }
  }
  
  render() {
    let { item } = this.props;
    return (
      <input className="modal-item-checklistitem-content" 
        type="text"
        ref={(input) => this.textInput = input}
        defaultValue={item.content}
        onKeyUp={this.handleKeyUp}
        />
    )
  }
}

EditableCheckListItemContent.propTypes = {
  item: PropTypes.object.isRequired,
  disableEditMode: PropTypes.func.isRequired,
  updateContent: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableCheckListItemContent)
