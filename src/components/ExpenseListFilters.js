// import React for using JSX
import React from 'react'

// import the connect function to connect the components to the redux store
import { connect } from 'react-redux'

// import the date picker component which is developed by airbnb
import { DateRangePicker } from 'react-dates'

// import other js files => use
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'



// Regular component unconnected to the redux store. Export the unconnected component for testing
export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate()
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount()
        }
    }

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange = {this.onTextChange}
                />
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={this.onSortChange}
                >
                    <option value='date'> Date </option>
                    <option value='amount'> Amount </option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths= {1}
                    isOutsideRange= {() => false}
                />
            </div>
        )
    }
}



// function that returns a props object at which the values of the keys can access the redux store
// Note: as the store changes, this function is automatically going to run getting the new values in the component
const mapStateToProps = (state) => ({
        filters: state.filters
})

// It is a way to return your dispatch functions allowing you to abstract them away from the component
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


/* using the connect method to connect the regular component with a predefined function to get a new 
component which is now connected to the redux store. We export the connected version of the component */
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)