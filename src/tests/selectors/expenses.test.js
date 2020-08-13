// import other js files => use
import getVisibleExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'

/* In a test file, we have access to a set of global variables and methods (like 'test') that are
provided by JEST to construct our test cases */
/* There is an assertion library provided by JEST like ('expect'). It gives us access to a function and we can use it to 
make assertions about values in our program */

/* toBe method can compare two booleans, numbers or strings */

/* toEqual method can compare two objects or arrays. It goes over your array or object and assert that
all of the properties are the same */


// test case for filter by text
test('Should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})

// test case for filter by startDate
test('Should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0] ])
})

// test case for filter by endDate
test('Should filter by endDate', (() => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days')
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1]])
}))

// test case for filter by date
test('Should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

// test case for filter by amount
test('Should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})


