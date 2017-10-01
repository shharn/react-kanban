import React, { Component } from 'react';
import '../css/Lane.css';
import Card from '../containers/CardContainer';
import AddCard from '../containers/AddCard';

export default class Lane extends Component {
    constructor(props) {
        super(props);
        this.handleClickOnEmptySpace = this.handleClickOnEmptySpace.bind(this);
    }

    handleClickOnEmptySpace(event) {
        let { laneId, isEditing, title } = this.props;
        if (isEditing && event.target.className === "lane") {
            this.props.toggleAddCard(laneId, isEditing);
        }
    }

    render() {
        let { laneId, title, cards } = this.props;
        let cardComponents = cards.map(card => ( <Card card={card} key={card.id}/> ));
        return (
            <li className="lane" key={laneId} id={laneId} onClick={this.handleClickOnEmptySpace}>
                <div className="title">{title}</div>
                {cardComponents}
                <AddCard laneId={laneId} />
            </li>
        );
    }
}
