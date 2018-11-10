import React from 'react';
import { Box, Anchor, Text } from 'grommet';

const Footer = () => (
  <Box>
    <Box align='center' background='brand' pad='small' gap='xsmall'>
      <Box direction='row' gap='xsmall'>
        <Anchor href='https://github.com/atanasster/hyperparameters' target='_blank'><Text weight={700}>hpjs</Text></Anchor>
      </Box>
      <Box>
        Copyright (c) {(new Date().getFullYear())} Atanas & Martin Stoyanov
      </Box>
    </Box>
  </Box>
);

export default Footer;
