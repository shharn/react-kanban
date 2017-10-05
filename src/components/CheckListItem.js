import React, { Component } from 'react';
import EditableCheckListItemContent from '../containers/EditableCheckListItemContent';
import SimpleCheckListItemContent from '../containers/SimpleCheckListItemContent';
import PropTypes from 'prop-types'

class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(changeEvent) {
    let item = { ...this.props.item };
    item.isDone = !item.isDone;
    this.props.updateCheckListItem(item);
  }

  render() {
    let { item, isEditMode, cardId } = this.props;
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" checked={item.isDone} onChange={this.handleCheckboxChange} />
        {isEditMode ? <EditableCheckListItemContent item={item}/> : <SimpleCheckListItemContent item={item} cardId={cardId}/>}
      </div>
    );
  }
}

CheckListItem.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  updateCheckListItem: PropTypes.func.isRequired,
  deleteCheckListItem: PropTypes.func.isRequired
}

export default CheckListItem;