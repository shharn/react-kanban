import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleEditableCard } from '../actions/laneActions';
import { addCard } from '../actions/cardActions';
import keycode from 'keycode';
import '../css/AddCard.css';

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleClick() {
        this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
    }

    handleKeyUp(keyEvent) {
        if (keyEvent.which === keycode.codes['enter']) {
            let newCard = {
                title: this.textInput.value,
                laneId: this.props.laneId,
                dueDate: "",
                description: "",
                comments: [],
                checkListData: {
                    checkListItemIds: [],
                    whoIsEditMode: -1,
                    isEditMode: false
                }
            };
            this.props.addCard(newCard);
            this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
        } else if (keyEvent.which === keycode.codes['esc']) {
            this.props.toggleEditMode(this.props.laneId, this.props.isEditing);
        }
    }

    render() {
        let content = this.props.isEditing ?
            <input className="add-card-editable" type="text" placeholder="Enter the content" 
                onKeyUp={this.handleKeyUp} ref={(input) => this.textInput = input}/> :
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
        addCard: (card) => dispatch(addCard(card))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);