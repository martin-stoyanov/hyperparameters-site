import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Link from 'next/link';

const Header = () => (
  <Box direction='row' pad={{ horizontal: 'medium', vertical: 'small' }} align='center' justify='between' background='brand'>
    <Box direction='row' justify='start' gap='small'>
      <Link href='/'><Button><Heading margin='none' level='2'>hpjs</Heading></Button></Link>
      <Text margin={{ top: 'xsmall' }}size='xsmall'>hyperparameter optimization for Javascript</Text>
    </Box>
    <Box direction='row' justify='end' gap='medium'>
      <Link href='/explore'><Button>Explore</Button></Link>
      <Button
        primary={true}
        hoverIndicator='background'
        href='https://github.com/atanasster/hyperparameters'
        target='_blank'
      >
        <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}><Text>GITHUB</Text></Box>
      </Button>
    </Box>
  </Box>
);

export default Header;
