// import React for using JSX
import React from 'react'

// import the connect function to connect the components to the redux store
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

// import other js files => use
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'



/* React router component comes with built in props. The React component which got rendered by a Route 
Component can only access these props */
export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        // this.props.dispatch(editExpense(this.props.expense.id, expense))   // This is hard to test because editExpense() is an imported function from outside
        this.props.editExpense(this.props.expense.id, expense)  // This is much easier to test (using a mock function)
        // Navigate to the home page
        this.props.history.push('/') 
    }
    onRemove = () => {
        // this.props.dispatch(removeExpense({ id: this.props.expense.id }))      // This is hard to test because removeExpense() is an imported function from outside
        this.props.removeExpense({ id: this.props.expense.id })         // This is much easier to test (using a mock function)
        // Navigate to the home page
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                This is from my edit expense page.
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit= {this.onSubmit}
                />
                <button onClick = {this.onRemove} > Remove </button>
            </div>
        )
    }
}



// function that returns a props object at which the values of the keys can access the redux store
// Note: as the store changes, this function is automatically going to run getting the new values in the component
const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

// It is a way to return your dispatch functions allowing you to abstract them away from the component
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})


/* using the connect method to connect the regular component with a predefined function to get a new 
component which is now connected to the redux store. We export the connected version of the component */
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)