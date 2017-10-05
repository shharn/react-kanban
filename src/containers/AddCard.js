import React, { Component } from 'react'
import { connect } from 'react-redux';
import { changeEditableAddCard } from '../actions/ui/lane';
import PropTypes from 'prop-types'
import '../css/AddCard.css';

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

AddCard.propTypes = {
    laneId: PropTypes.string.isRequired,
    enableEditMode: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);