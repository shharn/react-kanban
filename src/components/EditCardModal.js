import React, { Component } from 'react';
import '../css/EditCardModal.css';
import keycode from 'keycode';

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleInputKeyUp = this.handleTitleInputKeyUp.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleDescriptionInputKeyUp = this.handleDescriptionInputKeyUp.bind(this);
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this);
    this.handleDueDateInputKeyUp = this.handleDueDateInputKeyUp.bind(this);
    this.handleDueDateInputChange = this.handleDueDateInputChange.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
  }

  handleClick(clickEvent) {
    let targetNodeClassName = clickEvent._targetInst._hostNode.className;
    let { isTitleEditable, isDescriptionEditable, isDueDateEditable } = this.props.editModeContent;
    if (targetNodeClassName.indexOf("editCardModalContainer") !== -1) {
      this.props.toggleCardEditMode(null);
    } else if (!isTitleEditable && targetNodeClassName.indexOf("modal-item-title") !== -1) {
      this.props.toggleTitleEditMode();
    } else if (!isDescriptionEditable && targetNodeClassName.indexOf("modal-item-description") !== -1) {
      this.props.toggleDescriptionEditMode();
    } else if (!isDueDateEditable && targetNodeClassName.indexOf("modal-item-duedate") !== -1) {
      this.props.toggleDueDateEditMode();
    }
  }

  getTimeString(dateObject) {
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();

    return [dateObject.getFullYear(),
        (month > 9 ? '' : '0') + month,
        (date > 9 ? '' : '0') + date]
        .join('-');
  }
  // handleInputChange(event) {
  //   this.props.handleInputChange(event.target.value);
  // }

  // saveButtonClicked() {
  //   this.props.saveCard(this.props.card);
  //   this.props.toggleCardEditMode(null);
  // }

  // handleInputKeyUp(keyEvent) {
  //   if (keyEvent.which === keycode.codes["esc"]) {
  //     this.props.toggleCardEditMode(null);
  //   } else if (keyEvent.which === keycode.codes["enter"]) {
  //     this.props.saveCard(this.props.card);
  //     this.props.toggleCardEditMode(null);
  //   }
  // }

  handleTitleInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleTitleEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.editModeContet.card;
      this.props.updateTitle(card.id, card.title);
    }
  }

  handleTitleInputChange(changeEvent) {
    this.props.reflectTitleInputChange(changeEvent.target.value);
  }

  handleDescriptionInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleDescriptionEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.props.editModeContent.card;
      this.props.updateDescription(card.id, card.description);
    }
  }

  handleDescriptionInputChange(changeEvent) {
    this.props.reflectDescriptionInputChange(changeEvent.target.value);
  }

  handleDueDateInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleDueDateEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.props.editModeContent.card;
      this.props.updateDueDate(card.id, card.dueDate);
    }
  }
  
  handleDueDateInputChange(changeEvent) {
    this.props.reflectDueDateInputChange(changeEvent.target.value);
  }

  render() {
    let { isEditMode, editModeContent } = this.props;
    let { card, isTitleEditable, isDescriptionEditable, isDueDateEditable } = editModeContent;

    let containerClassName = "editCardModalContainer " + (isEditMode ? "show" : "hide");
    let titleClassName = "modal-item modal-item-title";
    let descriptionClassName = "modal-item modal-item-description";
    let duedateClassName = "modal-item modal-item-duedate";

    let cardTitle = card === null ? "" : card.title;
    let cardDescription = card === null ? "" : card.description;
    let cardDueDate = card === null ? "" : this.getTimeString(new Date(card.dueDate));

    let titleComponent = isTitleEditable ?
      <input className={titleClassName} onKeyUp={this.handleTitleInputKeyUp} onChange={this.handleTitleInputChange} value={cardTitle}/> : 
      <div className={titleClassName}>{cardTitle}</div>;
    let descriptionComponent = isDescriptionEditable ?
      <input className={descriptionClassName} onKeyUp={this.handleDescriptionInputKeyUp} onChange={this.handleDescriptionInputChange} value={cardDescription}/> :
      <div className={descriptionClassName}>{cardDescription}</div>;
    let duedateComponent = isDueDateEditable ?
      <input className={duedateClassName} onKeyUp={this.handleDueDateInputKeyUp} onChange={this.handleDueDateInputChange} value={cardDueDate}/> :
      <div className={duedateClassName}>{cardDueDate}</div>;
    return (
      <div className={containerClassName} onClick={this.handleClick} onKeyUp={this.handleKeyUp}>
        <div className="modal">
          {titleComponent}
          {descriptionComponent}
          {duedateComponent}
          {/* <button className="modal-item-button" type="button" onClick={this.saveButtonClicked}>Save</button> */}
        </div>
      </div>
    );
  }
}

export default EditCardModal;