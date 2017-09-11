import cards from './cards.json';
import lanes from './lanes.json';

export default {
    getAllCards: () => ( cards ),
    addCard: (callback) => callback(),
    getAllLanes: () => ( lanes )
};