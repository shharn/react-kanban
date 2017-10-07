import { connect } from 'react-redux';
import Lane from '../components/Lane';
import { DropTarget } from 'react-dnd';
import * as ItemTypes from '../types/dndTypes';
import { moveCard } from '../actions/domain/lane';

const mapStateToProps = (state, ownProps) => {
    let { laneId, title } = ownProps;
    let cardIds = state.domain.lanes[laneId].cards;
    let cards =  state.domain.cards.filter((card) => cardIds.includes(card.id));
    return {
        cards,
        laneId,
        title,
        isEditableAddCard: state.ui.lane.currentEditableAddCard === laneId
    };
};

const laneTarget = {
        drop(props, monitor) {
            let item = monitor.getItem();
            props.dispatch(moveCard(item.cardId, item.fromLaneId, props.laneId));
        }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

const droppableLane = DropTarget(ItemTypes.DND_CARD, laneTarget, collect)(Lane);
export default connect(mapStateToProps)(droppableLane);