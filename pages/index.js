import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Box align='center' gap='medium' pad='small'>
      <Heading margin='none' size='medium'>HyperparametersJS</Heading>
      <Paragraph>
        A Javascript Library for hyperparameter optimization
      </Paragraph>
    </Box>
    <Box align='center'>
      <Box direction='row' wrap='true' align='center' pad='small'>
        <Box>
          <Heading size='small'>Works in Javascript</Heading>
          <Paragraph>Multiple studies have shown that horizontal people are the leaders and
              influencers in every industry. By rotating your twitter profile, we will make
              it a must-follow for every celebrity.
          </Paragraph>
        </Box>
        <Box>
          <Heading size='small'>Implemented it in 2 ways</Heading>
          <Paragraph>Since the brain of horizontal people functions at a higher speed,
              they can like and share up to 40 posts per minute. Switching to a horizontal
              Facebook page design will make your community go viral in no time.
          </Paragraph>
        </Box>
        <Box>
          <Heading size='small'>Full Featureset</Heading>
          <Paragraph>Massively horizontal computing is the new name in super-high performance
               computing. By simply rotating your CPU, we will allow you to train artificial
               intelligence models in nano-seconds without ever needing another GPU.
          </Paragraph>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Index;
