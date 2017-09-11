import React, { Component } from 'react';
import '../css/Lane.css';
import Card from './Card';
import AddCard from '../containers/AddCard';

export default class Lane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let laneId = this.props.id;
        let cards = this.props.cards.map(card => {
            if (card.laneId === laneId) {
                return <Card card={card} key={card.id}/>
            }
        });
        return (
            <li className="lane" id={this.props.id}>
                <h2>{this.props.title}</h2>
                {cards}
                <AddCard laneId={laneId} />
            </li>
        );
    }
}
