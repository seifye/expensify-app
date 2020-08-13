// create store is something that we call once to create the redux state container
import { createStore } from 'redux'


// Actions generators
// They are functions that return action objects (applying ES6 object destructuring)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})



// Reducers
// This function is called a reducer that determines what to do based off of the state and the action 
// Rule 1: Reducers are pure functions which means that the output is only determined by the input.
// Rule 2: In Reducer functions, we never want to directly change the inputs instead returning an object that represents the new state
const countReducer = (currentState = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: currentState.count + action.incrementBy
            }
        case 'DECREMENT': 
            return {
                count: currentState.count - action.decrementBy
            }
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return currentState;
    }
}



/* Creating the redux state container at which we can also define the default state object. It take two
arguments, one is a function which is excuted when the store is created or rerendered, the second
argument is the 'action' object that allow us to actually change the redux state container */
const store = createStore(countReducer)


// We can fetch the current state and get that object back using the Get state method
store.getState()


/* Watching for changes to the store to do things like rerender our application. This can be done by
calling the subscribe method. The subscribe function that we pass a single function to it and this 
function gets called every single time the redux state store changes. Note that: the return value
from subscriber is actually a function and we can call it later to unsubscribe */
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



/* Actions are our way of communicating with the redux state container. Action is nothing more than an
object that gets sent to the store and this object describes the type of action we'd like to take and
we write the action under the 'type' key. The method which allows us to send off an action object to
the redux container is the dispatch method. When calling the dispatch method on the redux state store,
it will run the defined store function */
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))




// STOP watching for changes to the store.
unsubscribe()