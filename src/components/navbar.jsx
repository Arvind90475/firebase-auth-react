import React, { useState }  from 'react'
import {Link} from 'react-router-dom'

import { Menu} from 'semantic-ui-react'



  

export default function Navbar(){
    const [state, setState] = useState({ activeItem: 'home' });
    
    const handleItemClick = (e, { name }) => {
      console.log(name);
        setState({ activeItem: name });
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
          <Menu.Item
            as={Link}
            to= '/new'
            name='new blog'
            active={activeItem === 'new blog'}
            onClick={handleItemClick}
          />
          
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
        </Menu>
    )
  
}