import { connect } from 'react-redux';
import { changeEditableCheckListItemId } from '../actions/ui/editModal';
import { updateCheckListItem, deleteCheckListItem } from '../actions/domain/checkList';
import CheckListItem from '../components/CheckListItem';

const mapStateToProps = (state, ownProps) => {
    let item = state.domain.checkList.filter(item => item.id === ownProps.id)[0];
    let isEditMode = state.ui.editModal.currentEditableCheckListItemId === ownProps.id ? true : false;
    return {
        isEditMode,
        item
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditMode: (itemId) => dispatch(changeEditableCheckListItemId(itemId)),
        updateCheckListItem: (item) => {
            dispatch(updateCheckListItem(item));
            dispatch(changeEditableCheckListItemId(-1));
        },
        deleteCheckListItem: (itemId) => dispatch(deleteCheckListItem(itemId))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckListItem);