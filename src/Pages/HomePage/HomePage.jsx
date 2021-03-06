import React from "react";
import { Segment, Container, Header, Button, Icon, Image } from "semantic-ui-react";
import { Link }  from 'react-router-dom'
const HomePage = () => (
     <Segment inverted textAlign='center' vertical className='masthead'>
     <Container text>
       <Header as='h1' inverted>
         <Image
           size='massive'
           src='/assets/images/logo.png'
           alt='logo'
           style={{ marginBottom: 12 }}
         />
         Re-vents
       </Header>
       <Button as={Link} to='/events' size='huge' inverted>
         Get started
         <Icon name='right arrow' inverted />
       </Button>
     </Container>
   </Segment>
);
export default HomePage;
