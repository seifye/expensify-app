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
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'


// Test case for rendering ExpenseForm with no expense data
test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

// Test case for rendering ExpenseForm with expense data
test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})



// Simulating the events (user interaction with the component) as exapmle: (onSubmit, onChange handler functions)

// Test case for rendering an error for invalid form submission (without description or without amount)
test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    // snapshot to ensure that no error mssg shows up
    expect(wrapper).toMatchSnapshot()
    /* find the form element inside the component by id, classname or tag name and then call the simulate method with the event. We can define the (e)
    object argument in the second argument here to fake the behaviour of preventDefault() which is called on the event (e) (actually the event in 
    testing is always undefined because it is not declared anywhere in the app what is e) */
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}    // So when executing (e.preventDefault()), it will do nothing because we faked the real behavior (not refreshing the page) with fake behavior (doing nothing)
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    // snapshot to ensure that an error mssg shows up
    expect(wrapper).toMatchSnapshot()
})



// Test case for setting up the description on input change
test('should set description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    /* find the input element inside the component by id, classname or tag name. In this component we have more than one input so we use the (at) to 
    fetch by index. Then we call the simulate method with the event. We can define the (e) object argument in the second argument here to fake the
    behaviour of (target.value) which is called on the event (e) (actually the event in testing is always undefined because it is not declared 
    anywhere in the app what is e) */
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('description')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})



// Test case for setting up the note on textarea change
test('should set note on textarea change', () => {
    const value = 'New Note'
    const wrapper = shallow(<ExpenseForm />)
    /* find the input element inside the component by id, classname or tag name. Then we call the simulate method with the event. We can define the (e) object argument in the second argument here to fake the
    behaviour of (target.value) which is called on the event (e) (actually the event in testing is always undefined because it is not declared 
    anywhere in the app what is e) */
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('note')).toBe(value)
})


// Test case for setting up the amount when it is valid
test('should set amount on input change only if the amount value is valid', () => {
    const value = '125.15'
    const wrapper = shallow(<ExpenseForm />)
    /* find the input element inside the component by id, classname or tag name. In this component we have more than one input so we use the (at) to 
    fetch by index. Then we call the simulate method with the event. We can define the (e) object argument in the second argument here to fake the
    behaviour of (target.value) which is called on the event (e) (actually the event in testing is always undefined because it is not declared 
    anywhere in the app what is e) */
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('amount')).toBe(value)
    expect(wrapper).toMatchSnapshot()
})



// Test case for not setting up the amount when it is invalid
test('should not set amount on input change if the amount value is invalid', () => {
    const value = '125.1655'
    const wrapper = shallow(<ExpenseForm />)
    /* find the input element inside the component by id, classname or tag name. In this component we have more than one input so we use the (at) to 
    fetch by index. Then we call the simulate method with the event. We can define the (e) object argument in the second argument here to fake the
    behaviour of (target.value) which is called on the event (e) (actually the event in testing is always undefined because it is not declared 
    anywhere in the app what is e) */
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    })
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})



/* Mocked functions are called as Spies because they let us spy on the behavior of a function that is called indirectly by some other code , rather than
only testing the output. You can create a mock function with jest.fn(). These spies is to create fake functions by JEST to make assertions about them.
We can check if the fake function is called with specific arguments and so on */

// Test case for calling the onSubmit prop for valid form submission
test('should call onSubmit prop for valid form submission', () => {
    /* In order to create a mock function, we have to call jest.fn() and it returns a new spy function 
    and we can have a new set of assertions */ 
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    /* find the form element inside the component by id, classname or tag name and then call the simulate method with the event. We can define the (e)
    object argument in the second argument here to fake the behaviour of preventDefault() which is called on the event (e) (actually the event in 
    testing is always undefined because it is not declared anywhere in the app what is e) */
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}    // So when executing (e.preventDefault()), it will do nothing because we faked the real behavior (not refreshing the page) with fake behavior (doing nothing)
    })
    /* check if the mock function gets called with arguments. It will throw an error if your spy was never called with the arguments and would pass if
    it was called */
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    }) 
})


// Test case for setting a new date on date change
test('should set a new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    // trigger a prop from a child component. We get the prop and call it
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})


// Test case for setting a calender focus on change
test('should set a calender focus on focus change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    // trigger a prop from a child component. We get the prop and call it
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})

