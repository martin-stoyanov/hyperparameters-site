import React from 'react';
import { Box, Paragraph, Button } from 'grommet';

const Footer = () => (
  <Box>

    <Box align='center' background='brand'>
      <Paragraph style={{ maxWidth: '500px' }}>
        <Button href='https://github.com/atanasster/hyperparameters' target='_blank'>hyperparameters (hpjs)</Button>
      </Paragraph>
      <Paragraph style={{ maxWidth: '500px' }}>Copyright (c) {(new Date().getFullYear())} Atanas Stoyanov, Martin Stoyanov</Paragraph>
    </Box>
  </Box>
);

export default Footer;
