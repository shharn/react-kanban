import React, { Component } from 'react';
import CheckListItem from './CheckListItem';

class CheckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let checkListItems = this.props.checkListItems.map(item => {
      return <CheckListItem key={item.id} item={item} />
    });
    return (
      <div className="modal-item-checklist-wrapper">
        <div className="modal-item-checklist-header">+ CheckList</div>
        {checkListItems}
      </div>
    );
  }
}

export default CheckList;