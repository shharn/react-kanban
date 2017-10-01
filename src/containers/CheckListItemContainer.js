import { connect } from 'react-redux';
import { updateCheckListItem, removeCheckListItem } from '../actions/checkListActions';
import { updateCheckListEditTarget } from '../actions/cardActions';
import CheckListItem from '../components/CheckListItem';

const mapStateToProps = (state, ownProps) => {
    let item = state.checkList.filter(item => item.id === ownProps.id)[0];
    return {
        whoIsEditMode: ownProps.whoIsEditMode,
        item,
        cardId: ownProps.cardId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleContentEditMode: (cardId, checkListItemId) => dispatch(updateCheckListEditTarget(cardId, checkListItemId)),
        updateCheckListItem: (checkListId, content, isDone) => dispatch(updateCheckListItem(checkListId, content, isDone)),
        removeCheckListItem: (checkListId) => dispatch(removeCheckListItem(checkListId))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckListItem);