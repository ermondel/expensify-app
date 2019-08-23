import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = event => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = event => {
    if (event.target.value === 'date') {
      this.props.sortByDate();
    } else if (event.target.value === 'amount') {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
        <div>
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="start"
            endDate={this.props.filters.endDate}
            endDateId="end"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
