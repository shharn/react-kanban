import React, { Component } from 'react';
import '../css/Lane.css';
import AddCard from '../containers/AddCard';
import Card from '../containers/CardContainer';
import EditableAddCard from '../containers/EditableAddCard';

export default class Lane extends Component {
    constructor(props) {
        super(props);
        this.handleClickOnEmptySpace = this.handleClickOnEmptySpace.bind(this);
    }

    handleClickOnEmptySpace(clickEvent) {
        let { laneId, isEditing, title } = this.props;
        if (isEditing && this.isOutsideOfCard(clickEvent._targetInst)) {
            this.props.toggleAddCard(laneId, isEditing);
        }
    }

    isOutsideOfCard(clickedElement) {
        return clickedElement.className === 'lane';
    }

    render() {
        let { laneId, title, cards, isEditableAddCard } = this.props;
        let cardComponents = cards.map(card => ( <Card card={card} key={card.id} laneId={laneId}/> ));
        return (
            <li className="lane" key={laneId} id={laneId} onClick={this.handleClickOnEmptySpace}>
                <div className="title">{title}</div>
                {cardComponents}
                {isEditableAddCard ?
                <EditableAddCard laneId={laneId}/> : <AddCard laneId={laneId}/>}
            </li>
        );
    }
}
