import cards from './cards.json';
import lanes from './lanes.json';
import kanbanboard from './kanbanboard.json';
import comments from './comments.json';

let nextCardId = 5;
let nextCommentId = 5;

export default {
    getAllCards: () => ( cards ),
    addCard: (card) => cards.push({
        id: nextCardId++,
        title: card.title,
        description: card.description,
        dueDate: card.dueDate,
        laneId: card.laneId,
        comments: card.comments
    }),
    deleteCard: (cardId) => cards.filter(card => card.id !== cardId),
    getAllComments: () => ( comments ),
    getAllLanes: () => ( lanes ),
    getKanbanboardStates: () => ( kanbanboard )
};