// create store is something that we call once to create the redux state container
/* combineReducers is going to allow us to create multiple small reducer functions that combine them
together to define how a state changes in a redux application */
import { createStore, combineReducers } from 'redux'

import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

const reduxStoreCreation = () => {
    // State store creation and combining Reducer functions
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }), 
        // this second argument is mainly for the redux dev tool which interacts with the browser extension
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}

export default reduxStoreCreation