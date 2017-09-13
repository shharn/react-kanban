import React, { Component } from 'react'
import '../css/Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { id, isEditing } = this.props.card;
        this.props.toggleEditMode(this.props.card);
    }

    render() {
        return (
            <div id={this.props.card.id} className="card" onClick={this.handleClick}>
                {this.props.card.title}
            </div>
        )
    }
}
