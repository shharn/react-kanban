import React, { Component } from 'react'
import { connect } from 'react-redux';
import SimpleAddCheckListItem from './SimpleAddCheckListItem';
import EditableAddCheckListItem from './EditableAddCheckListItem';

class SmartAddCheckList extends Component {
    render() {
        let { cardId } = this.props;
        return (
            <div className="modal-item-checklistitem modal-item-addchecklist">
                {this.props.isEditMode ? <EditableAddCheckListItem cardId={cardId}/> : <SimpleAddCheckListItem />}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isEditMode: state.ui.editModal.isAddCheckListItemEditable,
        cardId: ownProps.cardId
    }
}
    
export default connect(mapStateToProps)(SmartAddCheckList);