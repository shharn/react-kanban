import React, { Component } from 'react';
import EditableCardTitle from '../containers/EditableCardTitle';
import SimpleCardTitle from '../containers/SimpleCardTitle';
import PropTypes from 'prop-types'

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

SmartCardTitle.propTypes = {
  card: PropTypes.object,
  isTitleEditMode: PropTypes.bool
}

export default SmartCardTitle;