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

export default expensesReducer