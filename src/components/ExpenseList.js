// import React for using JSX
import React from 'react'

// import the connect function to connect the components to the redux store
import { connect } from 'react-redux'

// import other js files => use
import ExpenseListItem from './ExpenseListItem'

// import selectors
import getVisibleExpenses from '../selectors/expenses'


// Regular component unconnected to the redux store
// we export it just in the purpose of testing
export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p> No expenses </p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem {...expense} key={expense.id} />
                })
            )
        }
    </div>
)
// function that returns a props object at which the values of the keys can access the redux store
// Note: as the store changes, this function is automatically going to run getting the new values in the component
const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }    
}

/* using the connect method to connect the regular component with a predefined function to get a new 
component which is now connected to the redux store. We export the connected version of the component */
export default connect(mapStateToProps)(ExpenseList)

