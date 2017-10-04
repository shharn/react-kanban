import React, { Component } from 'react';
import CheckListItem from '../containers/CheckListItemContainer';
import AddCheckList from '../containers/AddCheckList';

class CheckList extends Component {
  render() {
    let { cardId, checkListItems } = this.props;
    let checkListItemsComponents = checkListItems.map(id => {
      return <CheckListItem key={id} id={id}/>
    });
    return (
      <div className="modal-item-checklist-wrapper">
        <div className="modal-item-checklist-header">+ CheckList</div>
        {checkListItemsComponents}
        <AddCheckList />
      </div>
    );
  }
}

export default CheckList;