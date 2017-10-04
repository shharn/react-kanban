import { connect } from 'react-redux';
import Lane from '../components/Lane';

const mapStateToProps = (state, ownProps) => {
    let { laneId, title } = ownProps;
    let cardIds = state.domain.lanes[laneId].cards;
    let cards = state.domain.cards.filter((card) => cardIds.includes(card.id));
    return {
        cards,
        laneId,
        title,
        isEditableAddCard: state.ui.lane.currentEditableAddCard === laneId
    };
};

export default connect(mapStateToProps)(Lane);