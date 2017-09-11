import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleEditableCard } from '../actions/laneActions';
import '../css/AddCard.css';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.laneId);
    }

    handleKeyUp() {
        console.log("handleKeyUp invoked");
    }

    render() {
        let content = this.props.isEditing ?
            <input type="text" placeholder="Enter the content" onClick={this.handleClick} onKeyUp={this.handleKeyUp} /> :
            "Add Card";
        return (
            <div className="addCard">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let laneId = ownProps.laneId;
    isEditing: state.lanes.laneId.isEditing
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (laneId) => dispatch(toggleEditableCard(laneId))
    };
};

export default connect()(AddCard);