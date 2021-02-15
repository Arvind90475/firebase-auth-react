import React from 'react'
import {Redirect, Route } from 'react-router-dom';

import { useAuthContext } from '../contexts/authContext';


const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useAuthContext();
    return (
        <Route
            {...rest}
            render={props => {
               return currentUser ? <Component {...props} /> : <Redirect to='/login' />
            }}
        >
        </Route>
    )
}


export default PrivateRoute;
