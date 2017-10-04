import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAddCheckListItemEditMode } from '../actions/ui/editModal';

class SimpleAddCheckListItem extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this)
    
  }

  handleDivClick() {
    this.props.enableEditMode();
  }

  render() {
    return (
      <div onClick={this.handleDivClick}>Add Item</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enableEditMode: () => dispatch(toggleAddCheckListItemEditMode())
  }
}

export default connect(undefined, mapDispatchToProps)(SimpleAddCheckListItem)