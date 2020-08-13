// import other js files => use
import { addExpense, removeExpense, editExpense } from '../../actions/expenses'



/* In a test file, we have access to a set of global variables and methods (like 'test') that are
provided by JEST to construct our test cases */
/* There is an assertion library provided by JEST like ('expect'). It gives us access to a function and we can use it to 
make assertions about values in our program */

/* toBe method can compare two booleans, numbers or strings */

/* toEqual method can compare two objects or arrays. It goes over your array or object and assert that
all of the properties are the same */


// test case for removeExpense function
test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

// test case for editExpense function
test('Should setup edit expense action object', () => {
    const action = editExpense('157xyz', {note: 'New note value'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '157xyz',
        updates: {
            note: 'New note value'
        }
    })
})

// test case for addExpense function with provided values
test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)    // Because each time we run the test case we will get a new string
        }
    })
})


// test case for addExpense function with default values
test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})