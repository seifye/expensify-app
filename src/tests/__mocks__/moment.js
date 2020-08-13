/* We create mocks (fake version) for various libraries used in our app to define their behaviour only
when we use them in testing. */

/* This file is about creating a mocked version of the moment library. We will define here what exactly
we want our mocked moment look like. In our react app, we are using the real momnet library while in
testing we will use the mocked version */

// Require the real library to ensure that the mock and it's real implementation stay in sync
// import moment from 'moment'
const moment = require.requireActual('moment')

/* function that we call inside of the mocked moment library. We force the moment to start a specific 
point in time if no point in time  was provided */
export default (timestamp = 0) => {
    return moment(timestamp)
}