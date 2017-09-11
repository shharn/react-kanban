import { connect } from 'react-redux';
import Lane from '../components/Lane';
import * as cardActions from '../actions/cardActions';
import * as laneActions from '../actions/laneActions';

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards,
        isEditing: state.lanes[ownProps.id].isEditing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddCard: (laneId, currentEditable) => dispatch(laneActions.toggleEditableCard(laneId, currentEditable))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);