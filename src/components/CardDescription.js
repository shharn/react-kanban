import React, { Component } from 'react';
import keycode from 'keycode';
import CheckList from './CheckList';

class CardDescription extends Component {
  constructor(props) {
    super(props);
    this.handleDescriptionInputKeyUp = this.handleDescriptionInputKeyUp.bind(this);
    this.handleDescriptionInputChange = this.handleDescriptionInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDescriptionInputKeyUp(keyEvent) {
    if (keyEvent.which === keycode.codes['esc']) {
      this.props.toggleDescriptionEditMode();
    } else if (keyEvent.which === keycode.codes['enter']) {
      let card = this.props.card;
      this.props.updateDescription(card.id, card.description);
      this.props.toggleDescriptionEditMode();
    }
  }

  handleDescriptionInputChange(changeEvent) {
    this.props.reflectDescriptionInputChange(changeEvent.target.value);
  }

  handleClick() {
    this.props.toggleDescriptionEditMode();
  }

  render() {
    let { card, isDescriptionEditable } = this.props;
    let descriptionClassName = "modal-item-description";
    let cardDescription = !isDescriptionEditable && (card === null || card.description === "") ? "No Description" : card.description;
    let descriptionComponent = isDescriptionEditable ?
    <input className={descriptionClassName} onKeyUp={this.handleDescriptionInputKeyUp} onChange={this.handleDescriptionInputChange} value={cardDescription}/> :
    <div className={descriptionClassName} onClick={this.handleClick}>{cardDescription}</div>;
    return (
      <div className="modal-item">
        <div className="modal-item-description-wrapper">
          {descriptionComponent}
          <CheckList checkListItems={typeof card === 'undefined' || !card ? [] : card.checklist}/>
        </div>
      </div>
    );
  }
}

export default CardDescription;