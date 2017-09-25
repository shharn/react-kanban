import React, { Component } from 'react';
import CheckListItem from './CheckListItem';
import AddCheckList from '../containers/AddCheckList';

class CheckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cardId, checkListData } = this.props;
    let checkListItems = checkListData.checkListItems || [];
    let checkListItemsComponents = checkListItems.map(item => {
      return <CheckListItem key={item.id} cardId={cardId} />
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