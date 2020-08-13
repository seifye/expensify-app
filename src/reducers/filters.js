// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'

// Reducers
// This function is called a reducer that determines what to do based off of the state and the action 
// Rule 1: Reducers are pure functions which means that the output is only determined by the input.
// Rule 2: In Reducer functions, we never want to directly change the inputs instead, returning an object that represents the new state

/* The expenses state is managed by the expenses reducer while the filters state is managed by the 
Filters Reducer */

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',        // sort by date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

