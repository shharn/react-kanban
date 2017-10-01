import React, { Component } from 'react';
import keycode from 'keycode';

class CardTitle extends Component {
  constructor(props) {
    super(props);
    this.handleTitleInputKeyUp = this.handleTitleInputKeyUp.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(clickEvent) {
    this.props.toggleTitleEditMode();
  }

  handleTitleInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleTitleEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      this.props.updateTitle(this.props.card.id, this.textInput.value);
      this.props.toggleTitleEditMode();
    }
  }

  render() {
    let titleClassName = "modal-item-title";
    let { card, isTitleEditable } = this.props;
    let cardTitle = !isTitleEditable && (typeof card === 'undefined' || card === null || card.title === "") ? "No Title" : card.title;
    let titleComponent = isTitleEditable ?
      <input className={titleClassName} onKeyUp={this.handleTitleInputKeyUp} ref={(input) => this.textInput = input} defaultValue={card.title}/> :
      <div className={titleClassName} onClick={this.handleClick}>{cardTitle}</div>;
    return (
      <div className="modal-item">
        {titleComponent}
      </div>
    );
  }
}

export default CardTitle;