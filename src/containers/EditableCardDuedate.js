import React, { Component } from 'react'
import { connect} from 'react-redux';
import keycode from 'keycode';
import { toggleDuedateEditMode } from '../actions/ui/editModal';
import { updateCard } from '../actions/domain/card';
import PropTypes from 'prop-types'
import moment from 'moment';

const mapStateToProps = (state, ownProps) => {
  return {
    card: ownProps.card
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDuedateEditMode: () => dispatch(toggleDuedateEditMode()),
    updateDuedate: (card) => {
      dispatch(updateCard(card));
      dispatch(toggleDuedateEditMode())
    }
  }
}

class EditableCardDuedate extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(keyEvent) {
    switch(keyEvent.which) {
      case keycode.codes['enter']:
        let inputDate = this.textInput.value.trim();
        if (inputDate.length === 0) {
          this.props.toggleDuedateEditMode();
          break;
        }
        if (inputDate.split('/').length !== 3) {
          alert('Wrong date format.\nex) 17 / 01 / 22');
          break;
        }
        
        let dateObject = this.getDateObject(inputDate);
        if (!dateObject.isValid()) {
          this.handleDateParsingError(dateObject.parsingFlags());
          break;
        }
        let { card } = this.props;
        let updatedCard = { ...card };
        updatedCard.dueDate = parseInt(dateObject.format('x'), 10);
        this.props.updateDuedate(updatedCard);
        break;
      case keycode.codes['esc']:
        this.props.toggleDuedateEditMode();
        break;
      default:
        break;
    }
  }

  getDateObject(strDate) {
    let dateArr = strDate.split('/');
    let tmpDateString = '20' + dateArr[0].trim() + '-' + dateArr[1].trim() + '-' + dateArr[2].trim() + ' 23:59:59';
    return moment(tmpDateString);
  }

  handleDateParsingError(errorFlags) {
    switch(errorFlags.overflow) {
      case -2:
        alert('Negative or Invalid value is not allowed');
        return;
      case 1:
        alert('Month value is overflowed');
        return;
      case 2:
        alert('Day value is overflowed');
        return;
      default:
        return;
    }
  }

  render() {
    let { card } = this.props;
    let formattedDate = (card && card.dueDate !== -1) ? moment(card.dueDate).format('YY / MM / DD') : '';
    return (
      <input className="modal-item-duedate" 
        type="text" 
        ref={(input) => this.textInput = input} 
        onKeyUp={this.handleKeyUp} 
        defaultValue={formattedDate} />    
    )
  }
}

EditableCardDuedate.propTypes = {
  card: PropTypes.object.isRequired,
  toggleDuedateEditMode: PropTypes.func.isRequired,
  updateDuedate: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableCardDuedate);