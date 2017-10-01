import React, { Component } from 'react';
import keycode from 'keycode';

class CardDueDate extends Component {
  constructor(props) {
    super(props);
    this.handleDueDateInputKeyUp = this.handleDueDateInputKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDueDateInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleDueDateEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      this.props.updateDueDate(this.props.card.id, this.textInput.value);
      this.props.toggleDueDateEditMode();
    }
  }

  handleClick() {
    this.props.toggleDueDateEditMode();
  }

  render() {
    let  { card, isDueDateEditable } = this.props;
    let duedateClassName = "modal-item-duedate";
    let cardDueDate = !isDueDateEditable && (typeof card === 'undefined' || card === null || card.dueDate === "") ? "No DueDate" : card.dueDate;
    let duedateComponent = isDueDateEditable ?
      <input 
          className={duedateClassName} 
          onKeyUp={this.handleDueDateInputKeyUp} 
          defaultValue={cardDueDate} 
          ref={(input) => this.textInput = input}/> :
      <div 
          className={duedateClassName} 
          onClick={this.handleClick}>
            {cardDueDate}
        </div>;
    return (
      <div className="modal-item">
        {duedateComponent}
      </div>
    );
  }
}

export default CardDueDate;