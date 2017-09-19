import React, { Component } from 'react';
import keycode from 'keycode';

class CardTitle extends Component {
  constructor(props) {
    super(props);
    this.handleTitleInputKeyUp = this.handleTitleInputKeyUp.bind(this);
    this.handleTitleInputChange = this.handleTitleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(clickEvent) {
    this.props.toggleTitleEditMode();
  }

  handleTitleInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleTitleEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.props.card;
      this.props.updateTitle(card.id, card.title);
      this.props.toggleTitleEditMode();
    }
  }

  handleTitleInputChange(changeEvent) {
    this.props.reflectTitleInputChange(changeEvent.target.value);
  }

  render() {
    let titleClassName = "modal-item-title";
    let { card, isTitleEditable } = this.props;
    let cardTitle = card === null || card.Title === "" ? "No Title" : card.title;
    let titleComponent = isTitleEditable ?
      <input className={titleClassName} onKeyUp={this.handleTitleInputKeyUp} onChange={this.handleTitleInputChange} value={cardTitle}/> :
      <div className={titleClassName} onClick={this.handleClick}>{cardTitle}</div>;
    return (
      <div className="modal-item">
        {titleComponent}
      </div>
    );
  }
}

export default CardTitle;