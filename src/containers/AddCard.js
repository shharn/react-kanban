import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleEditableCard, inputContentChanged } from '../actions/laneActions';
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
        if (!this.props.isEditing) {
            this.props.toggleEditableCard(this.props.laneId, this.props.isEditing);
        }
    }

    handleKeyUp(keyEvent) {
        if (keyEvent.which === keycode.codes['enter']) {
            let inputContent = this.props.inputContent;
            this.props.createCard(this.props.laneId, inputContent);
            this.props.toggleEditableCard(this.props.laneId, this.props.isEditing);
        } else if (keyEvent.which === keycode.codes['esc']) {
            this.props.toggleEditableCard(this.props.laneId, this.props.isEditing);
        }
    }

    handleInputChange(changeEvent) {
        let newInputContent = changeEvent.target.value;
        this.props.reflectInputChanges(this.props.laneId, newInputContent);
    }

    render() {
        let inputContent = this.props.inputContent;
        let content = this.props.isEditing ?
            <input type="text" placeholder="Enter the content"  onKeyUp={this.handleKeyUp} onChange={this.handleInputChange} value={inputContent} /> :
            "+ Add Card";
        let divClassName  = this.props.isEditing ? "addCard editing" : "addCard";
        return (
            <div className={divClassName} onClick={this.handleClick} >
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditableCard: (laneId, currentEditable) => dispatch(toggleEditableCard(laneId, currentEditable)),
        createCard: (laneId, title) => dispatch(addCard(laneId, title)),
        reflectInputChanges: (laneId, newInputContent) => dispatch(inputContentChanged(laneId, newInputContent))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);