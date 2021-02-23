import React, { useState }  from 'react'
import {Link, useHistory} from 'react-router-dom'

import { Menu} from 'semantic-ui-react'


import { useAuthContext } from '../contexts/authContext';



  

export default function Navbar(){
    const [state, setState] = useState({ activeItem: 'home' });
    const { user:{currentUser}, logout } = useAuthContext();
    
    const history = useHistory();
    
    const handleItemClick = (e, { name }) => {
        setState({ activeItem: name });
    }

    const handleLogout = async () => {
      try {
        logout();
        history.push('login');
      } catch (error) {
        
      }

    }
    
    const { activeItem } = state

    return (
        <Menu pointing secondary color='teal' size='huge'>
          <Menu.Item
            as={Link}
            to = '/'
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          
          {!currentUser ? (
            <Menu.Menu position='right'>
            <Menu.Item
              as={Link}
              to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/signup'
              name='signup'
              active={activeItem === 'signup'}
              onClick={handleItemClick}
            />
            </Menu.Menu>
          ) : (
            <Menu.Menu position='right'>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={handleLogout}
              />
              <Menu.Item
                as={Link}
                to='/dashboard'
                name={currentUser.displayName.split(' ')[0]}
                active={activeItem === 'dashboard'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
          )}
        </Menu>
    )
  
}