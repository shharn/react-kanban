import { connect } from 'react-redux';
import Card from '../components/Card';
import { toggleCardEditMode } from '../actions/kanbanboardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: (card) => dispatch(toggleCardEditMode(card))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);