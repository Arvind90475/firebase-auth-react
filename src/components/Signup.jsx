import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Form, Button, Card} from 'semantic-ui-react';

import {useAuthContext} from '../contexts/authContext';

function SignUp() {
    const { registerUser, googleLogin } =  useAuthContext()
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError ] = useState('');
    const history = useHistory();

    const handleChange = ({target}) => {
        const { name, value} = target;
        setUser({...user, [name]:value});
    }

    const handleSubmit = async () => {
        const {email, password} = user;
        setError('');
        setIsLoading(true);
        try {
            await registerUser(email, password);
            history.push('/dashboard');
        } catch (error) {
            setError('failed to Register');
        }
        setIsLoading(false);
    }

    const googleSingIn = async () => {
        setError('');
        setIsLoading(true);
        try {
            await googleLogin()
            history.push('/dashboard');
        } catch (error) {
            setError('Opps ! something went wrong')
        }
        setIsLoading(false);
    }

    return (
    <div className='auth-form'>
        <Card fluid>
        <Card.Content>
            {error && <h4>{error}</h4>}
            <Form onSubmit={handleSubmit} loading={isLoading}>
                <Form.Input name='email'    onChange={handleChange} type='email' label='Email' placeholder='joe@schmoe.com' required />
                <Form.Input name='password' onChange={handleChange} type='password' label='Password' placeholder='at least 6 character' required />
                <Button color='teal'>Sign up</Button>    
            </Form>
            <Button 
                disabled={isLoading}
                style={{marginTop:'20px'}} 
                color='google plus' 
                onClick={googleSingIn}
            >
                Sign in with Google
            </Button>
        </Card.Content>
        </Card>
        </div>
    )
}


export default SignUp;