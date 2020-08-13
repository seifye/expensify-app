// import React for using JSX
import React from 'react'

// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment' 

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import { ExpenseListFilter } from '../../components/ExpenseListFilters'
import {filters, changeFilters} from '../fixtures/filters'
import { setStartDate, setEndDate } from '../../actions/filters'


let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper

// this is a function will run before each test case
beforeEach(() => {
    // creating five spy functions to fake the props functions on the addExpense component
    setTextFilterSpy = jest.fn()
    sortByDateSpy = jest.fn()
    sortByAmountSpy = jest.fn()
    setStartDateSpy = jest.fn()
    setEndDateSpy = jest.fn()
    wrapper = shallow(
        <ExpenseListFilter 
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
        />
    )
})



// Testing React Component

// Test case to render the ExpenseList correctly
test('should render the ExpenseList correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
  

// Test case to render the ExpenseList with changed data correctly
test('should render the ExpenseList with changed data correctly', () => {
    wrapper.setProps({
        filters: changeFilters
    })
})


// Test case to check the onTextChange handler
test('', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: {
            value
        }
    })
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value)
})


// Test case to check the sortByDate handler
test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: changeFilters
    })
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(sortByDateSpy).toHaveBeenCalled()
})


// Test case to check the sortByAmount handler
test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: {
            value
        }
    })
    expect(sortByAmountSpy).toHaveBeenCalled()
})


// Test case to check the onDatesChange handler
test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate)
})


// Test case to check the onFocusChange handler
test('should handle data focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})