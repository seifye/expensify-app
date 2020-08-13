// import React for using JSX
import React from 'react'

/* Link can be used to do client side routing behind the scenes without a full page refresh to navigate
the different pages in our app */
import { Link } from 'react-router-dom'



const NotFoundPage = () => (
    <div>
        This is from 404 page --- <Link to='/'> Go Home </Link>
    </div>
)


export default NotFoundPage