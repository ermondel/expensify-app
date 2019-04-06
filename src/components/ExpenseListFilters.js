import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.props.filters.text} onChange={event => {
                        this.props.dispatch(setTextFilter(event.target.value));
                    }} />
                </div>
                <div>
                    <select value={this.props.filters.sortBy} onChange={event => {
                        if (event.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        } else if (event.target.value === 'amount') {
                            this.props.dispatch(sortByAmount());
                        }
                    }}>
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

export default connect(mapStateToProps)(ExpenseListFilters);
