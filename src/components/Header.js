// import React for using JSX
import React from 'react'

/* NavLink can be used to do client side routing behind the scenes without
a full page refresh to navigate the different pages in our app */
import { NavLink } from 'react-router-dom'



const Header = () => (
    <header>
        <h1> Expensify App </h1>
        <NavLink to='/' activeClassName='is-active' exact={true}> Dashboard </NavLink>
        <NavLink to='/create' activeClassName='is-active'> Create Expense </NavLink>
        <NavLink to='/help' activeClassName='is-active'> Help </NavLink>
    </header>
)

export default Header