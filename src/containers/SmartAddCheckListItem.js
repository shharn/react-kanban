import React, { Component } from 'react'
import { connect } from 'react-redux';
import SimpleAddCheckListItem from './SimpleAddCheckListItem';
import EditableAddCheckListItem from './EditableAddCheckListItem';
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
    return {
        isEditMode: state.ui.editModal.isAddCheckListItemEditable,
        cardId: ownProps.cardId
    }
}

class SmartAddCheckList extends Component {
    render() {
        let { cardId } = this.props;
        return (
            <div className="modal-item-checklistitem">
                {this.props.isEditMode ? <EditableAddCheckListItem cardId={cardId}/> : <SimpleAddCheckListItem />}
            </div>
        )
    }
}
   
SmartAddCheckList.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    cardId: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(SmartAddCheckList);