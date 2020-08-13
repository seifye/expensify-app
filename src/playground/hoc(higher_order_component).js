// Higher order component (hoc) is a react component (HOC) that renders one or more another component (regular component)
// This higher order component pattern is going to allow us to modify and change a series of existing components
//  The advantages of hoc are : reuse code, render hijacking, prop manipulation, abstract state

import React from 'react'
import ReactDOM from 'react-dom'

// regular react component
const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p> The info is: {props.info} </p>
    </div>
)

// regular function returning a higher order component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info. please don't share! </p>}
            <WrappedComponent {...props} />
        </div>
    )
}
const HigherOrderComponent =  withAdminWarning(Info)

ReactDOM.render(<HigherOrderComponent isAdmin = {true} info = "These are the details" />, document.getElementById('app'))