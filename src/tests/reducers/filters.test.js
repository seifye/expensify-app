// import other js files => use
import filtersReducer from '../../reducers/filters'

// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'


/* In a test file, we have access to a set of global variables and methods (like 'test') that are
provided by JEST to construct our test cases */
/* There is an assertion library provided by JEST like ('expect'). It gives us access to a function and we can use it to 
make assertions about values in our program */

/* toBe method can compare two booleans, numbers or strings */

/* toEqual method can compare two objects or arrays. It goes over your array or object and assert that
all of the properties are the same */



// test case for setting up the default values 
test('Should setup the default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',       
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

// test case for the SORT_BY_AMOUNT case
test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

// test case for the SORT_BY_DATE case
test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

// test case for the SET_TEXT_FILTER case
test('Should set the text filter value', () => {
    const text = 'This is my filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text)
})

// test case for the SET_START_DATE filter case
test('Should set the startDate filter value', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

// test case for the SET_END_DATE filter case
test('Should set the endDate filter value', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})