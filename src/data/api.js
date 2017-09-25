import cards from './cards.json';
import lanes from './lanes.json';
import kanbanboard from './kanbanboard.json';
import comments from './comments.json';
import checkListItems from './checkListItems.json';

let nextCardId = 5;
let nextCommentId = 5;
let nextCheckListItemId = 5;

const addCheckListItem = (cardId, content)  => {
    let newItem = {
        id: newCheckListItemId++,
        content: content,
        isDone: false        
    };
    checkListItems.push(newItem);
    let targetCard = cards.filter(card => card.id === cardId);
    targetCard.checkListData.checkListItems.push(newItem.id);
};

const getCheckListItemById = (id) => ( checkListItems.filter(item => item.id === id) );

const getFlattendCard = (card) => {
    let checkListItemIds = card.checkListData.checkListItems;
    let checkListItems = checkListItemIds.map(id => {
        return getCheckListItemById(id)
    });
    card.checkListData.checkListItems = checkListItems;
    return card;
};

export default {
    getAllCards: () => ( cards.map(card => ( getFlattendCard(card) )) ),
    addCard: (card) => cards.push({
        id: nextCardId++,
        title: card.title,
        description: card.description,
        dueDate: card.dueDate,
        laneId: card.laneId,
        comments: card.comments,
        checklist: []
    }),
    deleteCard: (cardId) => cards.filter(card => card.id !== cardId),
    getAllComments: () => ( comments ),
    getAllLanes: () => ( lanes ),
    getKanbanboardStates: () => ( kanbanboard ),
    getCheckListItems: () => ( checkListItems ),
    getCheckListItemById: (id) => ( checkListItems.filter(item => item.id === id)),
    addCheckListItem: (cardId, content) => addCheckListItem(cardId, content)
};