import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeEditableAddCard } from '../actions/ui/lane';
import '../css/AddCard.css';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.enableEditMode(this.props.laneId);
    }

    render() {
        return (
            <div className="addCard">
                <div className="add-card-not-editable" onClick={this.handleClick}>Add Card</div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        laneId: ownProps.laneId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enableEditMode: (laneId) => dispatch(changeEditableAddCard(laneId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);