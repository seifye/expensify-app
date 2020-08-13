// This file allows us to configure the testing environment we are running in

// import enzyme adapter 
import Enzyme from 'enzyme'

// import enzyme adapter (The adapter allows us to specify the react version that enzyme will deal with)
import Adapter from 'enzyme-adapter-react-16'

// Calling this method on enzyme to wire up enzyme to work with the adapter
Enzyme.configure({
    adapter: new Adapter()
})

 