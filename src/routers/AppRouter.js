// this is the AddRouter React Component which is responsible for all the client side routes in the app

// import React for using JSX
import React from 'react'

/* importing the BrowserRouter to create the Router in the browser. We import the Route for each
single page in our app. We import Switch which changes the behavior of react router dom to render
a route exclusively. */
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import other js files => use
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'



const AppRouter = () => (
        <BrowserRouter>
        <div>
           <Header />
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>            
    </BrowserRouter>
)

export default AppRouter

