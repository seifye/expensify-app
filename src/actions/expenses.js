// using universally unique identifier (uuid) library to generate id's for our addExpense action generator
import { v4 as uuidv4 } from "uuid";



// Actions generators
// They are functions that return action objects (applying ES6 object destructuring)

// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

