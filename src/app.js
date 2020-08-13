// install third parties libraries => import => use
import React from 'react'
import ReactDOM from 'react-dom'

/* We get access to the store information inside our react components by using the react-redux library. There's a single component
(provider component) and a single function (connect function). We're going to be using the provider component once at the root of our
application which is going to allow us to provide the store to all of the components that make up our application and we're going to
be using connect for every single component that needs to connect to the redux store either to get data or to dispatch data */
import { Provider } from 'react-redux'

// import other js files => use
import AppRouter from './routers/AppRouter'

// import redux store in our react app
import reduxStoreCreation from './store/configureStore'

// import actions
import { addExpense, removeExpense, editExpense } from './actions/expenses' 
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters'

// import selectors
import getVisibleExpenses from './selectors/expenses'

/* import the css normalize library from the dependencies folder to make sure all browsers start from
the exact same place. We do that by adding in a CSS reset. This makes the app look the same on all
browsers (that means your are building the styles of the app on the same base)*/
import 'normalize.css/normalize.css'

// import styles to the app
import './styles/styles.scss'

// import the css for the date picker component which is developed by airbnb
import 'react-dates/lib/css/_datepicker.css'






// creating the redux store
const store = reduxStoreCreation()
console.log(store.getState())


/* Watching for changes to the store to do things like rerender our application. This can be done by
calling the subscribe method. The subscribe function that we pass a single function to it and this 
function gets called every single time the redux state store changes. Note that: the return value
from subscriber is actually a function and we can call it later to unsubscribe */
// const unsubscribe = store.subscribe(() => {
//     const state = store.getState()
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })


/* Actions are our way of communicating with the redux state container. Action is nothing more than an
object that gets sent to the store and this object describes the type of action we'd like to take and
we write the action under the 'type' key. The method which allows us to send off an action object to
the redux container is the dispatch method. When calling the dispatch method on the redux state store,
it will run the defined store function */
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))
store.dispatch(setTextFilter('water'))
console.log(store.getState())


// STOP watching for changes to the store.
// unsubscribe()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


// standard method used to render on the screen whether you are using regular JSX or react components
ReactDOM.render(jsx, document.getElementById('app'))



