import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeEditableAddCard } from '../actions/ui/lane';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import { moveCard } from '../actions/domain/lane';
import * as ItemTypes from '../types/dndTypes';
import '../css/AddCard.css';

const mapStateToProps = (state, ownProps) => {
    return {
        laneId: ownProps.laneId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableEditMode: (laneId) => dispatch(changeEditableAddCard(laneId)),
        dispatch
    };
};

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.enableEditMode(this.props.laneId);
    }

    render() {
        let { connectDropTarget, isOver } = this.props;
        let jsx = isOver ?
            <div>
                <div className="card" style={{opacity: 0.5}}>Here !</div>
                <div className="addCard">
                    <div className="add-card-not-editable" onClick={this.handleClick}>Add Card</div>
                </div>
            </div> :
            <div className="addCard">
                <div className="add-card-not-editable" onClick={this.handleClick}>Add Card</div>
            </div>;
        return connectDropTarget(jsx);
    }
}

const addCardTarget = {
    drop(props, monitor) {
        console.log('addCardTarget drop event handler');
        let item = monitor.getItem();
        props.dispatch(moveCard(item.cardId, -1, item.fromLaneId, props.laneId));
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

AddCard.propTypes = {
    laneId: PropTypes.string.isRequired,
    enableEditMode: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
};

const draggableAddCard = DropTarget(ItemTypes.DND_CARD, addCardTarget, collect)(AddCard);
export default connect(mapStateToProps, mapDispatchToProps)(draggableAddCard);