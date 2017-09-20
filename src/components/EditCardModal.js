import React, { Component } from 'react';
import CardTitle from '../containers/CardTitleContainer';
import CommentWrapper from './CommentWrapper';
 import CardDescription from '../containers/CardDescriptionContainer';
 import CardDueDate from '../containers/CardDueDateContainer';
import '../css/EditCardModal.css';
import keycode from 'keycode';

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleSpaceClick = this.handleSpaceClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  handleSpaceClick(clickEvent) {
    let targetNodeClassName = clickEvent._targetInst._hostNode.className;
    let { isTitleEditable, isDescriptionEditable, isDueDateEditable } = this.props.editModeContent;
    if (targetNodeClassName.indexOf("editCardModalContainer") !== -1) {
      this.props.toggleCardEditMode(null);
     }
  }

  handleCloseButtonClick(clickEvent) {
    this.props.toggleCardEditMode(null);
  }

  render() {
    let { isEditMode, editModeContent } = this.props;
    let { card, isTitleEditable, isDescriptionEditable, isDueDateEditable } = editModeContent;
    let containerClassName = "editCardModalContainer " + (isEditMode ? "show" : "hide");
    return (
      <div className={containerClassName} onClick={this.handleSpaceClick} onKeyUp={this.handleKeyUp}>
        <button className="modal-close-button" type="button" onClick={this.handleCloseButtonClick}>X</button>
        <div className="modal">
          <CardTitle  card={card} isTitleEditable={isTitleEditable}/>
          <CardDescription card={card} isDescriptionEditable={isDescriptionEditable}/>
          <CardDueDate card={card} isDueDateEditable={isDueDateEditable}/>
          <CommentWrapper />
        </div>
      </div>
    );
  }
}

export default EditCardModal;