import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleEditableCard, reflectAddCardInputChange } from '../actions/laneActions';
import { addCard } from '../actions/cardActions';
import keycode from 'keycode';
import '../css/AddCard.css';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick() {
        this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
    }

    handleKeyUp(keyEvent) {
        if (keyEvent.which === keycode.codes['enter']) {
            let newCard = {
                title: this.props.inputContent,
                laneId: this.props.laneId,
                dueDate: "",
                description: "",
                comments: []
            };
            this.props.addCard(newCard);
            this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
        } else if (keyEvent.which === keycode.codes['esc']) {
            this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
        }
    }

    handleInputChange(changeEvent) {
        let updatedInputContent = changeEvent.target.value;
        this.props.reflectAddCardInputChange(this.props.laneId, updatedInputContent);
    }

    render() {
        let content = this.props.isEditing ?
            <input className="add-card-editable" type="text" placeholder="Enter the content" onKeyUp={this.handleKeyUp} onChange={this.handleInputChange}/> :
            <div className="add-card-not-editable" onClick={this.handleClick}>Add Card</div>;
        return (
            <div className="addCard">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let laneId = ownProps.laneId;
    return {
        isEditing: state.lanes[laneId].isEditing,
        inputContent: state.lanes[laneId].inputContent
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditMode: (laneId, currentEditMode) => dispatch(toggleEditableCard(laneId, currentEditMode)),
        addCard: (card) => dispatch(addCard(card)),
        reflectAddCardInputChange: (laneId, title) => dispatch(reflectAddCardInputChange(laneId, title))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);