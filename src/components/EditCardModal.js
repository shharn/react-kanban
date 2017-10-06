import React, { Component } from 'react';
import SmartCardTitle from './SmartCardTitle';
import SmartCardDescription from './SmartCardDescription';
import SmartCardDueDate from './SmartCardDueDate';
import PropTypes from 'prop-types'
import '../css/EditCardModal.css';

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleEmptySpaceClick = this.handleEmptySpaceClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  handleEmptySpaceClick(clickEvent) {
    if (this.isClickedInThisArea(clickEvent._targetInst, 'editCardModalContainer')) {
      this.props.disableEditModal();
    }
  }

  isClickedInThisArea(targetElement, className) {
    return targetElement._hostNode.className.indexOf(className) !== -1;
  }

  handleCloseButtonClick(clickEvent) {
    this.props.disableEditModal();
  }

  render() {
    let { uiState, card } = this.props;
    let { show, isTitleEditMode, isDescriptionEditMode, isDuedateEditMode} = uiState;
    let containerClassName = "editCardModalContainer " + (show ? "show" : "hide");
    return (
      <div className={containerClassName} onClick={this.handleEmptySpaceClick}>
        <button className="modal-close-button" type="button" onClick={this.handleCloseButtonClick}>X</button>
        <div className="modal">
          <SmartCardTitle  card={card} isTitleEditMode={isTitleEditMode} />
          <SmartCardDescription card={card} isDescriptionEditMode={isDescriptionEditMode}/>
          <SmartCardDueDate card={card} isDuedateEditMode={isDuedateEditMode}/>
        </div>
      </div>
    );
  }
}

EditCardModal.propTypes = {
  uiState: PropTypes.object.isRequired,
  card: PropTypes.object,
  disableEditModal: PropTypes.func.isRequired
}

export default EditCardModal;