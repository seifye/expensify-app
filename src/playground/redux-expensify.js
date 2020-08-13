// create store is something that we call once to create the redux state container
/* combineReducers is going to allow us to create multiple small reducer functions that combine them
together to define how a state changes in a redux application */
import { createStore, combineReducers } from 'redux'

// using universally unique identifier (uuid) library to generate id's for our addExpense action generator
import { v4 as uuidv4 } from "uuid";




// Actions generators
// They are functions that return action objects (applying ES6 object destructuring)

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT   
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})  

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
    
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})


// Reducers
// This function is called a reducer that determines what to do based off of the state and the action 
// Rule 1: Reducers are pure functions which means that the output is only determined by the input.
// Rule 2: In Reducer functions, we never want to directly change the inputs instead, returning an object that represents the new state

/* The expenses state is managed by the expenses reducer while the filters state is managed by the 
Filters Reducer */

// Expenses Reducer 
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE': 
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state;
    }
}

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',        // sort by date or amount
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
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

// getVisibleExpenses Function returns the expenses array after filtering and sorting the data 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate != "number" || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        // returns 1 (a comes first) or -1 (b comes first)
        if (sortBy === 'date') { 
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}



// State store creation and combining Reducer functions
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

/* Watching for changes to the store to do things like rerender our application. This can be done by
calling the subscribe method. The subscribe function that we pass a single function to it and this 
function gets called every single time the redux state store changes. Note that: the return value
from subscriber is actually a function and we can call it later to unsubscribe */
const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})



/* Actions are our way of communicating with the redux state container. Action is nothing more than an
object that gets sent to the store and this object describes the type of action we'd like to take and
we write the action under the 'type' key. The method which allows us to send off an action object to
the redux container is the dispatch method. When calling the dispatch method on the redux state store,
it will run the defined store function */
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));
console.log(expenseOne)
console.log(expenseTwo)

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate());

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))




// STOP watching for changes to the store.
unsubscribe()





// TIME STAMPS are any positive or negative integer value (counting in milliseconds)
// The Time Stamp Zero represent "January 1st 1970 at midnight" (known as unix epoch)
// 33400 means 33.4 seconds after January 1st 1970









