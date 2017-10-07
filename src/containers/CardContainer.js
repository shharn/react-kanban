import { connect } from 'react-redux';
import Card from '../components/Card';
import { changeCardIdForEditModal } from '../actions/ui/editModal';
import { deleteCard } from '../actions/domain/card';
import { DragSource } from 'react-dnd';
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
    deleteCard: (cardId, laneId) => dispatch(deleteCard(cardId, laneId))
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

const collect = (connect, monitor)  => {
  return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
  }
}

const draggableCard = DragSource(ItemTypes.DND_CARD, cardSource, collect)(Card);
export default connect(mapStateToProps, mapDispatchToProps)(draggableCard);