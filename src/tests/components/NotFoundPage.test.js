// import React for using JSX
import React from 'react'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'

// import other js files => use
import NotFoundPage from '../../components/NotFoundPage'



// Testing React Component
// This is a static component. It doesn't have any state, it doesn't take in any props
test('should render the NotFoundPage component correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})