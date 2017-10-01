import React, { Component } from 'react';
import CheckListItem from '../containers/CheckListItemContainer';
import AddCheckList from '../containers/AddCheckList';

class CheckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cardId, checkListData } = this.props;
    let checkListItemIds = (typeof checkListData.checkListItemIds === 'undefined') ? [] : checkListData.checkListItemIds;
    let checkListItemsComponents = checkListItemIds.map(id => {
      return <CheckListItem key={id} cardId={cardId} id={id} whoIsEditMode={checkListData.whoIsEditMode}/>
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