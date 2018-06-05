import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Link from 'next/link';

const Header = () => (
  <Box direction='row' pad='medium' align='center' justify='between' background='brand'>
    <Box direction='row' justify='left' gap='small'>
      <Link href='/'><Button><Heading margin='none' level='3'>HyperSearch</Heading></Button></Link>
      <Text margin={{ top: 'xsmall' }}size='xsmall'>Hyperparameter optimization for Javascript</Text>
    </Box>
    <Box direction='row' justify='right' gap='small'>
      <Link href='/'><Button>Home</Button></Link>
      <Link href='/tutorials'><Button>Tutorials</Button></Link>
      <Link href='/gallery'><Button>Gallery</Button></Link>
    </Box>
  </Box>
);

export default Header;
