// import other js files => use
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { addExpense } from '../../actions/expenses'



/* In a test file, we have access to a set of global variables and methods (like 'test') that are
provided by JEST to construct our test cases */
/* There is an assertion library provided by JEST like ('expect'). It gives us access to a function and we can use it to 
make assertions about values in our program */

/* toBe method can compare two booleans, numbers or strings */

/* toEqual method can compare two objects or arrays. It goes over your array or object and assert that
all of the properties are the same */


// test case for setting up the default values 
test('Should set the default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

// test case for removing expense by id
test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

// test case for removing expense by id
test('Should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

// test case for adding an expense
test('Should add an expense to the expense array dummy data', () => {
    const expense = {
        id: '4',
        description: 'Laptop',
        note: '',
        amount: 29500,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

// test case for editing an expense with an existing id
test('Should edit an expense with a valid id', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

// test case for editing an expense with no existing id
test('Should not edit an expense if id is not found', () => {
    const amount = 122000
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
