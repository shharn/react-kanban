import cards from './cards.json';
import lanes from './lanes.json';
import kanbanboard from './kanbanboard.json';
import comments from './comments.json';

let nextCardId = 5;
let nextCommentId = 5;

export default {
    getAllCards: () => ( cards ),
    addCard: (title, laneId) => cards.push({
        id: nextCardId++,
        title: title,
        laneId: laneId
    }),
    deleteCard: (cardId) => cards.filter(card => card.id !== cardId),
    getAllComments: () => ( comments ),
    getAllLanes: () => ( lanes ),
    getKanbanboardStates: () => ( kanbanboard )
};