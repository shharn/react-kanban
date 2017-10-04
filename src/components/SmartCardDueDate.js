import React, { Component } from 'react';
import keycode from 'keycode';
import SimpleCardDuedate from '../containers/SimpleCardDuedate';
import EditableCardDuedate from '../containers/EditableCardDuedate';

class SmartCardDueDate extends Component {
  render() {
    let  { card, isDuedateEditMode } = this.props;
    return (
      <div className="modal-item">
        {isDuedateEditMode ? <EditableCardDuedate card={card}/> : <SimpleCardDuedate card={card}/>}
      </div>
    );
  }
}

export default SmartCardDueDate;