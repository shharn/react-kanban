import cards from './cards.json';
import lanes from './lanes.json';

let nextCardId = 5;

export default {
    getAllCards: () => ( cards ),
    addCard: (title, laneId) => cards.push({
        id: nextCardId++,
        title: title,
        laneId: laneId
    }),
    getAllLanes: () => ( lanes )
};