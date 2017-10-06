import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Card.css';
import moment from 'moment';

  class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this);
    }

    handleClick(clickEvent) {
        if (this.isClickedCard(clickEvent._targetInst)) {
            this.props.showEditModal(this.props.card.id);
        }
    }

    isClickedCard(targetElement) {
        return targetElement._hostNode.className.indexOf('card') !== -1;
    }

    handleDeleteButtonClicked() {
        let { card, laneId } = this.props;
        this.props.deleteCard(card.id, laneId);
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
        let formattedDate = card.dueDate === -1 ? "" : moment(card.dueDate).format(' YY / MM / DD');
        return (
            <div id={card.id} className="card" key={card.id} onClick={this.handleClick}>
                <button type="button" className="card-delete-button" onClick={this.handleDeleteButtonClicked}>X</button>
                <div className="card-title">
                    {card.title}
                </div>
                <div className="card-duedate">
                    {formattedDate}
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    card: PropTypes.object.isRequired,
    laneId: PropTypes.string.isRequired,
    showEditModal: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
}

export default Card;