import React, { Component } from 'react';
import keycode from 'keycode';

class CardDueDate extends Component {
  constructor(props) {
    super(props);
    this.handleDueDateInputKeyUp = this.handleDueDateInputKeyUp.bind(this);
    this.handleDueDateInputChange = this.handleDueDateInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDueDateInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleDueDateEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.props.card;
      this.props.updateDueDate(card.id, card.dueDate);
      this.props.toggleDueDateEditMode();
    }
  }
  
  handleDueDateInputChange(changeEvent) {
    let stringDate = changeEvent.target.value;
    this.props.reflectDueDateInputChange(changeEvent.target.value);
  }

  handleClick() {
    this.props.toggleDueDateEditMode();
  }

  render() {
    let  { card, isDueDateEditable } = this.props;
    let duedateClassName = "modal-item-duedate";
    let cardDueDate = !isDueDateEditable && (card === null || card.dueDate === "") ? "No DueDate" : card.dueDate;
    let duedateComponent = isDueDateEditable ?
      <input className={duedateClassName} onKeyUp={this.handleDueDateInputKeyUp} onChange={this.handleDueDateInputChange} value={cardDueDate}/> :
      <div className={duedateClassName} onClick={this.handleClick}>{cardDueDate}</div>;
    return (
      <div className="modal-item">
        {duedateComponent}
      </div>
    );
  }
}

export default CardDueDate;