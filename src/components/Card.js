import React, { Component } from 'react'
import '../css/Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this);
    }

    handleClick(clickEvent) {
        if (clickEvent._targetInst._hostNode.className.indexOf("card") !== -1) {
            this.props.toggleEditMode(this.props.card);
        }
    }

    handleDeleteButtonClicked() {
        this.props.deleteCard(this.props.card.id);
    }

    getTimeString(dateObject) {
        let month = dateObject.getMonth() + 1;
        let date = dateObject.getDate();

        return [dateObject.getFullYear(),
            (month > 9 ? '' : '0') + month,
            (date > 9 ? '' : '0') + date]
            .join('-');
    }

    render() {
        let card = this.props.card;
        return (
            <div id={card.id} className="card" key={card.id} onClick={this.handleClick}>
                <button type="button" className="delete-button" onClick={this.handleDeleteButtonClicked}>X</button>
                <div className="card-title">
                    {card.title}
                </div>
                <div className="card-duedate">
                    {card.dueDate === undefined ? "" : card.dueDate}
                </div>
            </div>
        )
    }
}
