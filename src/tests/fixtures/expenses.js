
// A fixture is your baseline test data (Dummy test data to get used in your test files)

// import the moment.js API as a date library which is much easier than the Date object in JS
import moment from 'moment'


const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses