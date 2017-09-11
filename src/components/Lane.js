import React, { Component } from 'react';
import '../css/Lane.css';
import Card from './Card';
import AddCard from '../containers/AddCard';

export default class Lane extends Component {
    constructor(props) {
        super(props);
        this.handleClickOnEmptySpace = this.handleClickOnEmptySpace.bind(this);
    }

    handleClickOnEmptySpace(event) {
        if (this.props.isEditing && event.target.className === "lane") {
            this.props.toggleAddCard(this.props.id, this.props.isEditing);
        }
    }

    render() {
        let laneId = this.props.id;
        let cards = this.props.cards.map(card => {
            if (card.laneId === laneId) {
                return <Card card={card} key={card.id}/>
            }
        });
        return (
            <li className="lane" id={this.props.id} onClick={this.handleClickOnEmptySpace}>
                <div className="title">{this.props.title}</div>
                {cards}
                <AddCard laneId={laneId} />
            </li>
        );
    }
}
