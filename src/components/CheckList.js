import React, { Component } from 'react';
import CheckListItem from '../containers/CheckListItemContainer';
import SmartAddCheckListItem from '../containers/SmartAddCheckListItem';

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
        <SmartAddCheckListItem cardId={cardId}/>
      </div>
    );
  }
}

export default CheckList;