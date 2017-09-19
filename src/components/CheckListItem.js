import React, { Component } from 'react';

class CheckListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    let className = item.isDone ? "item-completed" : "";
    return (
      <div className="modal-item-checklistitem">
        <input type="checkbox" className={className} checked={item.isDone}>{item.content}</input>
      </div>
    );
  }
}

export default CheckListItem;