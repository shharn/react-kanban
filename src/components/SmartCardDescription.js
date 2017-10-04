import React, { Component } from 'react';
import keycode from 'keycode';
import CheckList from './CheckList';
import SimpleCardDescription from '../containers/SimpleCardDescription';
import EditableCardDescription from '../containers/EditableCardDescription';

class SmartCardDescription extends Component {
  render() {
    let { card, isDescriptionEditMode } = this.props;
    return (
      <div className="modal-item">
        <div className="modal-item-description-wrapper">
          {isDescriptionEditMode ? <EditableCardDescription card={card}/> : <SimpleCardDescription card={card}/>}
          <CheckList cardId={typeof card === 'undefined' || !card ? -1 : card.id} 
              checkListItems={typeof card === 'undefined' || !card ? [] : card.checkListItems}/>
        </div>
      </div>
    );
  }
}

export default SmartCardDescription;