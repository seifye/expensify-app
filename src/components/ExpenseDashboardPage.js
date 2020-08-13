// import React for using JSX
import React from 'react'

// import other js files => use
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilters'


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilter />
        <ExpenseList />
    </div>
)


export default ExpenseDashboardPage