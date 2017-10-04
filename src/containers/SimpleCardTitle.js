import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleTitleEditMode } from '../actions/ui/editModal';

class SimpleCardTitle extends Component {
  constructor(props) {
    super(props);
    this.handleDivClick = this.handleDivClick.bind(this);
  }

  handleDivClick() {
    this.props.toggleTitleEditMode();
  }

  render() {
    let { card } = this.props;
    return (
      <div className="modal-item-title" onClick={this.handleDivClick}>
        {(card && card.title.length > 0) ? card.title : "No Title"}
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
    toggleTitleEditMode: () => dispatch(toggleTitleEditMode())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCardTitle);