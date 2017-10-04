import React, { Component } from 'react';
import keycode from 'keycode';
import EditableCheckListItemContent from '../containers/EditableCheckListItemContent';
import SimpleCheckListItemContent from '../containers/SimpleCheckListItemContent';

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
    let { item, isEditMode } = this.props;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" checked={item.isDone} onChange={this.handleCheckboxChange} />
        {isEditMode ? <EditableCheckListItemContent item={item}/> : <SimpleCheckListItemContent item={item}/>}
      </div>
    );
  }
}

export default CheckListItem;