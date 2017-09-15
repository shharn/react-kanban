import React, { Component } from 'react';
import '../css/EditCardModal.css';
import keycode from 'keycode';

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveButtonClicked = this.saveButtonClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  handleClick(clickEvent) {
    if (clickEvent._targetInst._hostNode.className.indexOf("editCardModalContainer") !== -1) {
      this.props.toggleCardEditMode(null);
    }
  }

  // handleInputChange(event) {
  //   this.props.handleInputChange(event.target.value);
  // }

  // saveButtonClicked() {
  //   this.props.saveCard(this.props.card);
  //   this.props.toggleCardEditMode(null);
  // }

  handleInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes["esc"]) {
      this.props.toggleCardEditMode(null);
    } else if (keyEvent.which === keycode.codes["enter"]) {
      this.props.saveCard(this.props.card);
      this.props.toggleCardEditMode(null);
    }
  }

  handleTitleInputKeyUp(keyEvent) {

  }

  handleTitleInputChange(changeEvent) {

  }

  handleTitleDivClick(clickEvent) {

  }

  handleDescriptionInputKeyUp(keyEvent) {
    
  }

  render() {
    let { isEditMode, editModeContent } = this.props;
    let { card, isTitleEditable, isDescriptionEditable, isDuedateEditable } = editModeContent;

    let containerClassName = "editCardModalContainer " + (isEditMode ? "show" : "hide");
    let titleClassName = "modal-item modal-item-title";
    let descriptionClassName = "modal-item modal-item-description";

    let cardTitle = card === null ? "" : card.title;
    let cardDescription = card === null ? "" : card.description;

    let titleComponent = isTitleEditable ?
        <input className={titleClassName} onKeyUp={this.handleTitleInputKeyUp} onChange={this.handleTitleInputChange}>{cardTitle}</input> :
        <div className="modal-item modal-item-title" onClick={this.handleTitleDivClick}>{cardTitle}</div>;
    let descriptionComponent = isDescriptionEditable ?
        <input className={descriptionClassName} onKeyUp={this.handleDescriptionInputKeyUp} onChange={this.handleDescriptionInputChange}>{cardDescription}</input> :
        <div className={descriptionClassName} onClick={this.handleDescriptionDivClick}>{cardDescription}</div>;
    return (
      <div className={containerClassName} onClick={this.handleClick} onKeyUp={this.handleKeyUp}>
        <div className="modal">
          {titleComponent}
          {descriptionComponent}
          {/* <button className="modal-item-button" type="button" onClick={this.saveButtonClicked}>Save</button> */}
        </div>
      </div>
    );
  }
}

export default EditCardModal;