import { connect } from 'react-redux';
import CardTitle from '../components/CardTitle';
import { toggleTitleEditMode, reflectTitleInputChange } from '../actions/kanbanboardActions';
import { updateTitle } from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    isTitleEditable: ownProps.isTitleEditable
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTitleEditMode: () => dispatch(toggleTitleEditMode()),
    reflectTitleInputChange: (title) => dispatch(reflectTitleInputChange(title)),
    updateTitle: (cardId, title) => dispatch(updateTitle(cardId, title))
  }
}

export default connect(undefined, mapDispatchToProps)(CardTitle);