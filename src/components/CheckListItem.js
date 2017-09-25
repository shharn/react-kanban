import React, { Component } from 'react';
import keycode from 'keycode';

class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleCheckboxInputChange =  this.handleCheckboxInputChange.bind(this);
    this.handleDivClick = this.handleDivClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  handleCheckboxChange(changeEvent) {
    let { item } = this.props;
    console.log('change event occured - ');
    console.log(changeEvent);
    this.props.updateCheckListItem(item.id, item.content, !item.isDone);
  }

  handleCheckboxInputChange(changeEvent) {
    this.props.reflectInputChange(changeEvent.target.value);
  }

  handleDivClick() {
    let { item } = this.props;
    this.props.toggleEditMode(item.id);
  }

  handleInputKeyUp(keyEvent) {
    let { item } = this.props;
    switch (keyEvent.which) {
      case keycode.codes['enter'] :
        this.props.updateCheckListItem(item.id, item.content);
        this.props.toggleEditMode(item.id);
        break;
      case keycode.codes['esc']:
        this.props.toggleEditMode(item.id);
        break;
      default:
        break;
    }
  }

  render() {
    let { item } = this.props;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" checked={item.isDone} onChange={this.handleCheckboxChange} />
        {whoIsEditMode === item.id ?
          <input className="modal=item-checklistitem-content" type="text" value={item.content} onKeyUp={this.handleInputKeyUp} /> :
          <div className={className}>{item.content}</div>  
        }
      </div>
    );
  }
}

export default CheckListItem;