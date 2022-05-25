import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
        <Box>
            <Center>
                <Heading>Assignment of Chakra UI</Heading>
            </Center>
        </Box>
        <Box>
            <Center>
                
            </Center>
        </Box>
        <nav>
            <Link to='/'>Home Page</Link>
        </nav>
    </>
  )
}

export default Home