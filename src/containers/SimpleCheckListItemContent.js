import { connect } from 'react-redux'
import { changeEditableCheckListItemId, changeItemIdForDeleteButton } from '../actions/ui/editModal';
import { deleteCheckListItem } from '../actions/domain/checkList'
import React, { Component } from 'react'
 import PropTypes from 'prop-types'
  
 const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    isMouseEnter: ownProps.item.id === state.ui.editModal.itemIdThatHasDeleteButton
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: (itemId) => dispatch(changeEditableCheckListItemId(itemId)),
    showDeleteButton: (itemId) => dispatch(changeItemIdForDeleteButton(itemId)),
    hideDeleteButton: () => dispatch(changeItemIdForDeleteButton(-1)),
    deleteCheckListItem: (itemId, cardId) => dispatch(deleteCheckListItem(itemId, cardId))
  }
}

class SimpleCheckListItemContent extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleDeleteButtonClicked = this.handleDeleteButtonClicked.bind(this)
    console.log(this.props);
  }

  handleMouseEnter() {
    this.props.showDeleteButton(this.props.item.id);
  }

  handleMouseLeave() {
    this.props.hideDeleteButton();
  }

  handleDivClick() {
    this.props.toggleEditMode(this.props.item.id);
  }

  handleDeleteButtonClicked() {
    this.props.deleteCheckListItem(this.props.item.id, this.props.cardId);
  }
  
  render() {
    let { item, isMouseEnter } = this.props;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    let deleteButtonComponent = isMouseEnter ? 
      <div className="checklistitem-delete-button" 
        onClick={this.handleDeleteButtonClicked}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>x</div> :
      "";
    return (
      <div className="modal-item-checklistitem-content-wrapper">
        <div className={className} 
          onClick={this.handleDivClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          {item.content}
        </div>
        {deleteButtonComponent}
      </div>
    )
  }
}

SimpleCheckListItemContent.propTypes = {
  item: PropTypes.object.isRequired,
  isMouseEnter: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  showDeleteButton: PropTypes.func.isRequired,
  hideDeleteButton: PropTypes.func.isRequired,
  deleteCheckListItem: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCheckListItemContent)
