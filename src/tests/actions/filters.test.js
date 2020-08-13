// import other js files => use
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters'

// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'


/* In a test file, we have access to a set of global variables and methods (like 'test') that are
provided by JEST to construct our test cases */
/* There is an assertion library provided by JEST like ('expect'). It gives us access to a function and we can use it to 
make assertions about values in our program */

/* toBe method can compare two booleans, numbers or strings */

/* toEqual method can compare two objects or arrays. It goes over your array or object and assert that
all of the properties are the same */


// test case for setStartDate function
test('Should generate setup start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0) 
    })
}) 


// test case for setEndDate function
test('Should generate setup end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


// test case for sortByAmount function
test('Should generate setup sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})


// test case for sortByDate function
test('Should generate setup sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})


// test case for setTextFilter function with text value
test('Should generate setup setTextFilter action object with text value', () => {
    const text = 'rent'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

// test case for setTextFilter function with default text value
test('Should generate setup setTextFilter action object with default text value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})