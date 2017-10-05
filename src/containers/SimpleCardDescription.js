import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleDescriptionEditMode } from '../actions/ui/editModal';
import PropTypes from 'prop-types'

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

SimpleCardDescription.propTypes = {
  card: PropTypes.object,
  toggleDescriptionEditMode: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCardDescription);