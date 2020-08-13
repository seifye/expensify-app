// import React for using JSX
import React from 'react'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let editExpenseSpy, removeExpenseSpy, historySpy,  wrapper

// this is a function will run before each test case
beforeEach(() => {
    // creating two spy functions to fake the props functions on the addExpense component
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    historySpy = {
        push: jest.fn()
    }
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpenseSpy} 
            removeExpense = {removeExpenseSpy}
            history={historySpy} 
            expense={expenses[2]}
        />
    )
})



// Testing React Component

// Test case to render the EditExpensePage correctly
test('should render the EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})
  

// Test case to check the onSubmit handler
test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})


// Test case to check the onRemove handler
test('should handle onRemove', () => {
    wrapper.find('button').simulate('click')
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})
