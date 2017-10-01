import { connect } from 'react-redux';
import Lane from '../components/Lane';
import { toggleEditableCard } from '../actions/laneActions';

const mapStateToProps = (state, ownProps) => {
    let { laneId, title } = ownProps;
    let cardIds = state.lanes[laneId].cards;
    let cards = state.cards.filter((card) => cardIds.includes(card.id))
    return {
        cards,
        laneId,
        title,
        isEditing: state.lanes[ownProps.laneId].isEditing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAddCard: (laneId, currentEditable) => dispatch(toggleEditableCard(laneId, currentEditable))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);