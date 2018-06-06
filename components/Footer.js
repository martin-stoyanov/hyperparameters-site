import React from 'react';
import { Box, Paragraph, Button } from 'grommet';

const Footer = () => (
  <Box>

    <Box align='center' background='brand'>
      <Paragraph style={{ maxWidth: '500px' }}>
        <Button href='https://github.com/atanasster/hyperjs' target='_blank'>HyperJS</Button>
      </Paragraph>
      <Paragraph>Copyright (c) 2018 Atanas Stoyanov, Martin Stoyanov</Paragraph>
    </Box>
  </Box>
);

export default Footer;
