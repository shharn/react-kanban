import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { addCheckListItem } from '../actions/checkListActions';

class AddCheckList extends Component {
    render() {
        return (
            <div className="modal-item-checklistitem modal-item-addchecklist">
                Add Checklist Item
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => {
    // return {
    //     addCheckListItem: (content) => dispatch(addCheckListItem(content))
    // }
};

export default AddCheckList;