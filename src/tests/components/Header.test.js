// import React for using JSX
import React from 'react'

// import other js files => use
import Header from '../../components/Header'

/* There are two main ways to test react components (Shallow rendering and full DOM rendering). 
Shallow rendering renders only a given component while full DOM rendering renders child components as
well */

// Importing the shallow renderer from enzyme library
import { shallow } from 'enzyme'





// Testing React Component
// This is a static component. It doesn't have any state, it doesn't take in any props
test('Should render Header component correctly', () => {
    const wrapper = shallow(<Header />)
    /* Snapshots allow us to track changes to data over time. We will get notified if the rendered
    component ever changes. So if the component output changed in a way we don't want, we can catch and
    fix that. In contrast if it changed in a way we do want, we can allow that by updating the snapshot. 
    The last snapshot is always stored in the _snapshots_ folder which is used in comparison with the
    new snapshot. If you accepted the update (by pressing 'u') then the old snapshot in the  _snapshot_
    folder gets replaced by the new snapshot */
    expect(wrapper).toMatchSnapshot()
})




