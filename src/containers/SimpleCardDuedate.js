import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleDuedateEditMode } from '../actions/ui/editModal';
import PropTypes from 'prop-types'

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDuedateEditMode: () => dispatch(toggleDuedateEditMode())
  }
}

class SimpleCardDuedate extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this);
  }

  handleDivClick() {
    this.props.toggleDuedateEditMode();
  }

  render() {
    let { card } = this.props;
    return (
      <div className="modal-item-duedate" onClick={this.handleDivClick}>
        {(card && card.dueDate.length > 0) ? card.dueDate : "No Duedate"}
      </div>
    )
  }
}

SimpleCardDuedate.propTypes = {
  card: PropTypes.object,
  toggleDuedateEditMode: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCardDuedate)