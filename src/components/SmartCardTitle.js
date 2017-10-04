import React, { Component } from 'react';
import keycode from 'keycode';
import EditableCardTitle from '../containers/EditableCardTitle';
import SimpleCardTitle from '../containers/SimpleCardTitle';

class SmartCardTitle extends Component {
  render() {
    let { card, isTitleEditMode } = this.props;
    return (
      <div className="modal-item">
        {isTitleEditMode ? <EditableCardTitle card={card}/> : <SimpleCardTitle card={card}/>}
      </div>
    );
  }
}

export default SmartCardTitle;