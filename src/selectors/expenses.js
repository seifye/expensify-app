// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'


// Selectors are going to refer to things that actually query the data from the redux store

// getVisibleExpenses Function returns the expenses array after filtering and sorting the data 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true             
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        // returns 1 (a comes first) or -1 (b comes first)
        if (sortBy === 'date') { 
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses