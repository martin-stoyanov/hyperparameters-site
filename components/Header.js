import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Link from 'next/link';

const Header = () => (
  <Box direction='row' pad={{ horizontal: 'medium', vertical: 'small' }} align='center' justify='between' background='brand'>
    <Box direction='row' justify='left' gap='small'>
      <Link href='/'><Button><Heading margin='none' level='2'>hpjs</Heading></Button></Link>
      <Text margin={{ top: 'xsmall' }}size='xsmall'>Hyperparameters optimization for Javascript</Text>
    </Box>
    <Box direction='row' justify='right' gap='small'>
      <Link href='/explore'><Button>Explore</Button></Link>
    </Box>
  </Box>
);

export default Header;
