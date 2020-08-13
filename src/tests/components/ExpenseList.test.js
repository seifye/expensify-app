// import React for using JSX
import React from 'react'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'




// Testing React Component
// This is a dynamic component. It has props and is connected to the redux store
/* We test the unconnected version of the component to the redux store because we don't want the props
to come from the store, instead we will provide our dummy data */

// test case for rendering the ExpenseList with expenses 
test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

// test case for rendering the ExpenseList with no expenses 
test('should render ExpenseList with empty expenses array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})