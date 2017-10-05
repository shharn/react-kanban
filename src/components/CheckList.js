import React, { Component } from 'react';
import CheckListItem from '../containers/CheckListItemContainer';
import SmartAddCheckListItem from '../containers/SmartAddCheckListItem';
import PropTypes from 'prop-types'

class CheckList extends Component {
  render() {
    let { cardId, checkListItems } = this.props;
    let checkListItemsComponents = checkListItems.map(id => {
      return <CheckListItem key={id} id={id} cardId={cardId}/>
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

CheckList.propTypes = {
  cardId: PropTypes.number.isRequired,
  checkListItems: PropTypes.array.isRequired
}

export default CheckList;