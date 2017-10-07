import React, { Component } from 'react';
import '../css/Lane.css';
import AddCard from '../containers/AddCard';
import Card from '../containers/CardContainer';
import EditableAddCard from '../containers/EditableAddCard';
import PropTypes from 'prop-types'


class Lane extends Component {
    constructor(props) {
        super(props);
        this.handleClickOnEmptySpace = this.handleClickOnEmptySpace.bind(this);
    }

    handleClickOnEmptySpace(clickEvent) {
        let { laneId, isEditing } = this.props;
        if (isEditing && this.isOutsideOfCard(clickEvent._targetInst)) {
            this.props.toggleAddCard(laneId, isEditing);
        }
    }

    isOutsideOfCard(clickedElement) {
        return clickedElement.className === 'lane';
    }

    render() {
        let { laneId, title, cards, isEditableAddCard, connectDropTarget, isDrop } = this.props;
        let cardComponents = cards.map(card => ( <Card card={card} key={card.id} laneId={laneId}/> ));
        return connectDropTarget(
                <li className="lane" key={laneId} id={laneId} onClick={this.handleClickOnEmptySpace}>
                    <div className="title">{title}</div>
                    {cardComponents}
                    {isEditableAddCard ?
                    <EditableAddCard laneId={laneId}/> : <AddCard laneId={laneId}/>}
                </li>
            );
    }
}

Lane.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
    laneId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isEditableAddCard: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
}

export default Lane;