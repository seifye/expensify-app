// import React for using JSX
import React from 'react'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'



// Testing React Component
/* This is a dynamic component. It has props but  we don't want the props to come from the store,
instead we will provide our dummy data */

test('should render ExpenseListItem correctly with a given expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})
