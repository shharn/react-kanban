import React, { Component } from 'react';
import '../css/EditCardModal.css';
import keycode from 'keycode';

class EditCardModal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveButtonClicked = this.saveButtonClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick(clickEvent) {
    if (clickEvent._targetInst._hostNode.className.indexOf("editCardModalContainer") !== -1) {
      this.props.toggleCardEditMode(null);
    }
  }

  handleInputChange(event) {
    this.props.handleInputChange(event.target.value);
  }

  saveButtonClicked() {
    this.props.saveCard(this.props.card);
    this.props.toggleCardEditMode(null);
  }

  render() {
    let { isEditMode, card } = this.props;
    let containerClassName = "editCardModalContainer " + (isEditMode ? "show" : "hide");
    let cardTitle = card === null ? "" : card.title;
    return (
      <div className={containerClassName} onClick={this.handleClick}>
        <div className="modal">
          {card.id}
          <input type="text" className="modal-item" value={cardTitle} onChange={this.handleInputChange} onClick={this.handleInputKeyUp} />
          <button className="modal-item-button" type="button" onClick={this.saveButtonClicked}>Save</button>
        </div>
      </div>
    );
  }
}

export default EditCardModal;