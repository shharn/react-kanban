import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleDescriptionEditMode } from '../actions/ui/editModal';

class SimpleCardDescription extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this);
  }

  handleDivClick() {
    this.props.toggleDescriptionEditMode();
  }

  render() {
    let { card } = this.props;
    return (
      <div className="modal-item-description" onClick={this.handleDivClick}>
        {(card && card.description.length > 0) ? card.description : "No Description"}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDescriptionEditMode: () => dispatch(toggleDescriptionEditMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCardDescription);