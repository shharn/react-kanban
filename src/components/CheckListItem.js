import React, { Component } from 'react';

class CheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(changeEvent) {
    console.log('change event occured - ');
    console.log(changeEvent);
  }

  render() {
    let item = this.props.item;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" checked={item.isDone} onChange={this.handleCheckboxChange} />
        <div className={className}>{item.content}</div>  
      </div>
    );
  }
}

export default CheckListItem;