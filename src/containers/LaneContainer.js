import { connect } from 'react-redux';
import Lane from '../components/Lane';
import * as cardActions from '../actions/cardActions';

const mapStateToProps = (state, ownProps) => {
    return {
        cards: state.cards
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createCard: (laneId, title) => dispatch(cardActions.addCard(laneId, title))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Lane);