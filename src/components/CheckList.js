import React, { Component } from 'react';
import CheckListItem from './CheckListItem';

class CheckList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let checkListItems = this.props.checkListItems.map(item => {
      return <CheckListItem item={item} />
    });
    return (
      <div className="modal-item">
        {checkListItems}
      </div>
    );
  }
}

export default CheckList;