import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleAddCheckListItemEditMode } from '../actions/ui/editModal';
import PropTypes from 'prop-types'

const mapDispatchToProps = (dispatch) => {
  return {
    enableEditMode: () => dispatch(toggleAddCheckListItemEditMode())
  }
}

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
      <div className="addchecklist-not-editable" onClick={this.handleDivClick}>Add Item</div>
    )
  }
}

SimpleAddCheckListItem.propTypes = {
  enableEditMode: PropTypes.func.isRequired
}

export default connect(undefined, mapDispatchToProps)(SimpleAddCheckListItem)