import React, { Component } from 'react';
import SimpleCardDuedate from '../containers/SimpleCardDuedate';
import EditableCardDuedate from '../containers/EditableCardDuedate';
import PropTypes from 'prop-types'

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

SmartCardDueDate.propTypes = {
  card: PropTypes.object,
  isDuedateEditMode: PropTypes.bool
}

export default SmartCardDueDate;