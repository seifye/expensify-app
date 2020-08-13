// import React for using JSX
import React from 'react'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'


let addExpenseSpy, historySpy, wrapper

// this is a function will run before each test case
beforeEach(() => {
    // creating two spy functions to fake the props functions on the addExpense component
    addExpenseSpy = jest.fn()
    historySpy = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage addExpense={addExpenseSpy} history={historySpy} />)
})



// Testing React Component

// Test case to render the AddExpensePage correctly
test('should render the addExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
  

// Test case to check the onSubmit handler
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1])
})
