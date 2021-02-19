import { Route, Redirect } from 'react-router-dom';

import { useAuthContext } from '../contexts/authContext'

const AuthRouteGuard = ({component: Component, ...rest}) => {
    const { user:{currentUser} } = useAuthContext()

    return (
        <Route 
            {...rest}
            render={(props) =>  
                currentUser ? <Redirect to='/' /> : <Component {...props}  />}
        />
    )
}

export default AuthRouteGuard;