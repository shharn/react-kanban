import React, { Component } from 'react'
import EditCardModal from './EditCardModal';
import '../css/Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { id, isEditing } = this.props.card;
        this.props.toggleEditMode(id, isEditing);
    }

    render() {
        let { isEditing } = this.props.card;
        let modalContent = isEditing ? 
            <EditCardModal /> : "";
        return (
            <div id={this.props.card.id} className="card" onClick={this.handleClick}>
                {this.props.card.title}
                {modalContent}     
            </div>
        )
    }
}
