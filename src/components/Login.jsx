import React, {useState} from 'react'
import {Form, Button, Card} from 'semantic-ui-react';

import {useAuthContext} from '../contexts/authContext';

function Login() {
    const { loginUser } =  useAuthContext()
    const [isLoading, setIsLoading] = useState(false);

    const login = () => {
        setIsLoading(!isLoading);
        loginUser('testing@gmail.com','password');
    }

    return (
    <div className='auth-form'>
        <Card fluid>
        <Card.Content>
            <Form onSubmit={login} loading={isLoading}>
                <Form.Input type='email' label='Email' placeholder='joe@schmoe.com' required />
                <Form.Input type='password' label='Password' placeholder='joe@schmoe.com' required />
                <Button color='teal'>Submit</Button>    
            </Form>
        </Card.Content>
        </Card>
        </div>
    )
}


export default Login;