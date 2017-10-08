import { connect } from 'react-redux';
import Lane from '../components/Lane';
import { DropTarget } from 'react-dnd';
import * as ItemTypes from '../types/dndTypes';
import { moveCard } from '../actions/domain/lane';

const mapStateToProps = (state, ownProps) => {
    let { laneId, title } = ownProps;
    let cardIds = state.domain.lanes[laneId].cards;
    let cards = cardIds.map(id => {
        let pos = state.domain.cards.findIndex(card => card.id === id);
        return state.domain.cards.slice(pos, pos+1)[0];
    });
    return {
        cards,
        laneId,
        title,
        isEditableAddCard: state.ui.lane.currentEditableAddCard === laneId
    };
};

const laneTarget = {
        drop(props, monitor) {
            console.log('laneTarget drop event handler');
            let item = monitor.getItem();
            let cardPos = monitor.getClientOffset(); // point of mouse clicked
            if (!monitor.didDrop()) {
                // determine position of sourceCard according to the 'cardPos'
                props.dispatch(moveCard(item.cardId, -1, item.fromLaneId, props.laneId));
            }
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