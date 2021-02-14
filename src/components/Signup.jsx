import React, {useState} from 'react'
import {Form, Button, Card} from 'semantic-ui-react';

import {useAuthContext} from '../contexts/authContext';

function Signup() {
    const { registerUser } =  useAuthContext()
    const [isLoading, setIsLoading] = useState(false);

    const signup = () => {
        setIsLoading(!isLoading);
        registerUser('testing@gmail.com','password');
    }

    return (
    <div className='auth-form'>
        <Card fluid>
        <Card.Content>
            <Form onSubmit={signup} loading={isLoading}>
                <Form.Input type='email' label='Email' placeholder='joe@schmoe.com' required />
                <Form.Input type='password' label='Password' placeholder='joe@schmoe.com' required />
                <Button color='teal'>Register</Button>    
            </Form>
        </Card.Content>
        </Card>
        </div>
    )
}


export default Signup;