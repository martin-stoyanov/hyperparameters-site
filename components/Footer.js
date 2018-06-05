import React from 'react';
import { Box, Paragraph, Button } from 'grommet';

const Footer = () => (
  <Box>
    <Box align='center' pad='xsmall' background='dark-2'>
      <Paragraph style={{ maxWidth: '500px' }}>
        <Button href='https://github.com/atanasster/hyperjs' target='_blank'>HyperJS</Button>
      </Paragraph>
    </Box>
    <Box align='center' background='dark-1'>
      <Paragraph>Copyright (c) 2018 Atanas Stoyanov, Martin Stoyanov</Paragraph>
    </Box>
  </Box>
);

export default Footer;
