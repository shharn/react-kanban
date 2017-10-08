import { connect } from 'react-redux';
import Card from '../components/Card';
import { changeCardIdForEditModal } from '../actions/ui/editModal';
import { deleteCard } from '../actions/domain/card';
import { DragSource, DropTarget } from 'react-dnd';
import { moveCard } from '../actions/domain/lane';
import * as ItemTypes from '../types/dndTypes';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card,
    laneId: ownProps.laneId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showEditModal: (cardId) => dispatch(changeCardIdForEditModal(cardId)),
    deleteCard: (cardId, laneId) => dispatch(deleteCard(cardId, laneId)),
    dispatch
  }
};

const cardSource = {
  beginDrag(props) {
      return { 
        cardId: props.card.id,
        fromLaneId: props.laneId
      };
  }
}

const sourceCollect = (connect, monitor)  => {
  return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
  }
}

const cardTarget = {
  drop(props, monitor) {
      console.log('cardTarget drop event handler');
      let item = monitor.getItem();
      if (item.cardId !== props.card.id) {
        props.dispatch(moveCard(item.cardId, props.card.id, item.fromLaneId, props.laneId));
      }
  }
}

const targetCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    sourceItem: monitor.getItem()
  }
}

const draggableCard = DragSource(ItemTypes.DND_CARD, cardSource, sourceCollect)(Card);
const droppableAndDraggableCard = DropTarget(ItemTypes.DND_CARD, cardTarget, targetCollect)(draggableCard);
export default connect(mapStateToProps, mapDispatchToProps)(droppableAndDraggableCard);