import React, { Component } from 'react';
import keycode from 'keycode';

class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleDivClick = this.handleDivClick.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  handleCheckboxChange(changeEvent) {
    let { item } = this.props;
    this.props.updateCheckListItem(item.id, item.content, !item.isDone);
  }

  handleDivClick() {
    let { cardId, item } = this.props;
    this.props.toggleContentEditMode(cardId, item.id);
  }

  handleInputKeyUp(keyEvent) {
    let { cardId, item } = this.props;
    switch (keyEvent.which) {
      case keycode.codes['enter'] :
        this.props.updateCheckListItem(item.id, this.textInput.value);
        this.props.toggleContentEditMode(cardId, -1);
        break;
      case keycode.codes['esc']:
        this.props.toggleContentEditMode(cardId, -1);
        break;
      default:
        break;
    }
  }

  render() {
    let { item, whoIsEditMode, cardId } = this.props;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" checked={item.isDone} onChange={this.handleCheckboxChange} />
        {whoIsEditMode === item.id ?
          <input 
            className="modal-item-checklistitem-content" 
            type="text" defaultValue={item.content} 
            onKeyUp={this.handleInputKeyUp} 
            ref={(input) => this.textInput = input}/> :
          <div 
            className={className} 
            onClick={this.handleDivClick}>
            {item.content}
          </div>  
        }
      </div>
    );
  }
}

export default CheckListItem;