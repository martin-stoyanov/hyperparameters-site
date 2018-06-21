import React from 'react';
import { Box, Heading, Paragraph, Image, Text, Button } from 'grommet';
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Box align='center' gap='medium' pad={{ top: 'medium' }} >
      <Image src='/static/img/hpjs.png' />
      <Heading level='2' align='center'>
        A Javascript Library for hyperparameter optimization
      </Heading>
    </Box>
    <Box align='center'>
      <Box direction='row' wrap='true' alignContent='start' pad='small'>
        <Box>
          <Heading level='3'>Works in Javascript</Heading>
          <Paragraph>
            Now that Tensorflow, the most popular machine learning framework, has been released as a <a href='https://js.tensorflow.org/faq/' target='_blank' rel='noopener noreferrer'> Javascript API </a>, we can create machine learning models that run in the browser, and it&#39;s easy to see why using Javascript for machine learning is on the rise.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3'>Can be Implemented in 2 ways</Heading>
          <Paragraph>
            Include HyperparametersJS in your projects in 2 ways: either through <a href='https://github.com/atanasster/hyperparameters' target='_blank' rel='noopener noreferrer'>webpack</a> or directly in your file.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3'>Full Featureset</Heading>
          <Paragraph>
            Utilize multiple <Link href='/explore'>parameters</Link> and multiple search algorithms (grid search, bayesian, and random)
          </Paragraph>
        </Box>
      </Box>
    </Box>
    <Box align='center' pad='medium'><Heading level='3'>Demos</Heading></Box>
    <Box align='center'>
      <Box direction='row' wrap='true' pad='small' gap='large'>
        <Box>
          <Image src='/static/img/randint.png' />
        </Box>
        <Box align='start'>
          <Text size='large' color='brand'>Parameter Examples</Text>
          <Paragraph>Hpjs features multiple parameter expressions, including a
            random int expression
          </Paragraph>
          <Box direction='row' gap='small'>
            <Button
              label='Code'
              primary='false'
              href='/randint'
              color='brand'
            />
            <Button
              label='More expressions'
              primary='false'
              href='/explore'
              color='brand'
            />
          </Box>
        </Box>
      </Box>
      <Box direction='row' wrap='true' pad='small' margin='small' gap='large'>
        <Box align='start'>
          <Text size='large' color='brand'>Tensorflow Integration</Text>
          <Paragraph>Find the best optimizer and number of epochs for your machine learning models
          </Paragraph>
          <Box direction='row' gap='small'>
            <Button
              label='Code'
              primary='false'
              href='/tensorflow/tiny'
              color='brand'
            />
          </Box>
        </Box>
        <Box>
          <Image style={{ maxWidth: '600px' }} src='/static/img/tinyTensorflowTable.png' />
        </Box>
      </Box>
      <Box align='center' pad='medium' />
    </Box>
  </Layout>
);

export default Index;
