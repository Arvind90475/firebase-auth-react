import React, {useState} from 'react'
import {Dimmer, Loader, Card,  Button} from 'semantic-ui-react';

import useFetch from '../hooks/useFetch';




const Home = () => {

    const {data, isLoading, error} =  useFetch('https://jsonplaceholder.typicode.com/posts');
    const [isLiked, setIsLiked] = useState(false);



    

    return (
        <div>
           <Dimmer active={isLoading}>
                <Loader />
            </Dimmer>
            <div className="ui container home-container">
            {data && data.map(post => (
                <Card fluid key={post.id}>
                <Card.Content>
                  <Card.Header>{post.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    {post.body}.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Button
                    basic
                    color='teal'
                    icon={isLiked ? 'heart' : 'heart outline'}
                    label={{ basic: true, color: 'teal', pointing: 'left', content: 1234 }}
                    onClick = {()=> setIsLiked(!isLiked)}
                />
                </Card.Content>
              </Card>

            ))}
            </div>
        </div>
    )
}

export default Home; 