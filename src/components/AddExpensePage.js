// import React for using JSX
import React from 'react'

// import the connect function to connect the components to the redux store
import { connect } from 'react-redux'

// import other js files => use
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'


// Exporting the unconnected version of the component for testing purposes
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense))       // This is hard to test because addExpense(expense) is an imported function from outside
        this.props.addExpense(expense)                 // This is much easier to test (using a mock function)
        // Navigate to the dashboard page (homepage)
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1> Add Expense </h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}



// It is a way to return your dispatch functions allowing you to abstract them away from the component
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
})


/* using the connect method to connect the regular component with the state which is now connected to the redux store
and then we export the connected version of the component. Here we did't pass first argument to connect because
we don't need mapStateToprops, we only need to mapDispatchToProps and to access the built in dispatch prop  */
export default connect(undefined, mapDispatchToProps)(AddExpensePage)