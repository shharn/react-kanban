import { connect } from 'react-redux'
import { changeEditableCheckListItemId } from '../actions/ui/editModal';
import React, { Component } from 'react'
  
class SimpleCheckListItemContent extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this)
  }

  handleDivClick() {
    this.props.toggleEditMode(this.props.item.id);
  }
  
  render() {
    let { item, isEditMode } = this.props;
    let className = "modal-item-checklistitem-content" + (item.isDone ? " item-completed" : "");
    return (
      <div className={className} onClick={this.handleDivClick}>
        {item.content}
      </div>
    )
  }
}
  
const mapStateToProps = (state, ownProps) => ({
    item: ownProps.item
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: (itemId) => dispatch(changeEditableCheckListItemId(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCheckListItemContent)
