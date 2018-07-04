/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, Heading, Paragraph, Image, Text, Button, Anchor } from 'grommet';
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Box align='center' pad='medium' >
      <Image src='/static/img/hpjs.png' />
      <Heading level='2'>
        A Javascript Library for hyperparameter optimization
      </Heading>
      <Text>
        Helps you in selecting the optimal hyperparameters
        (constraints, weights or learning rates) for your learning algorithms.
      </Text>
    </Box>
    <Box align='center'>
      <Box direction='row' wrap='true' alignContent='start' pad='small' gap='small'>
        <Box>
          <Heading level='3'>Written in Javascript</Heading>
          <Paragraph>
            Now that Tensorflow, the most popular machine learning framework, has been released as a <Anchor href='https://js.tensorflow.org/faq/' target='_blank' rel='noopener noreferrer'> Javascript API </Anchor>, we can create machine learning models that run in the browser, and it&#39;s easy to see why using Javascript for machine learning is on the rise.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3'>Can be Implemented in 2 ways</Heading>
          <Paragraph>
            Include hpjs in your projects either through <Anchor href='https://github.com/atanasster/hyperparameters' target='_blank' rel='noopener noreferrer'>webpack</Anchor> or link directly in your html file.
          </Paragraph>
        </Box>
        <Box>
          <Heading level='3'>Versatile</Heading>
          <Paragraph>
            Utilize multiple <Link href='/explore'><Anchor>parameters</Anchor></Link> and multiple search algorithms (grid search, random, bayesian)
          </Paragraph>
        </Box>
      </Box>
    </Box>
    <Box align='center'><Heading level='2'>Examples</Heading></Box>
    <Box align='center'>
      <Box direction='row' wrap='true' width='xlarge' justify='between' pad='large'>
        <Image style={{ maxWidth: '100%' }} src='/static/img/randint.png' />
        <Box align='start'>
          <Text size='large' weight='700' color='brand'>Parameter Examples</Text>
          <Paragraph>Hpjs features multiple parameter expressions, including a
            random int expression
          </Paragraph>
          <Box direction='row' gap='small'>
            <Button
              label='view...'
              primary='false'
              href='/randint'
              color='brand'
            />
            <Button
              label='more ...'
              primary='false'
              href='/explore'
              color='brand'
            />
          </Box>
        </Box>
      </Box>
      <Box direction='row' wrap='true' width='xlarge' justify='between' pad='large'>
        <Box align='start'>
          <Text size='large' weight='700' color='brand'>Tensorflow Integration</Text>
          <Paragraph>Find the best optimizer and number of epochs for a small tensorflow.js model
          </Paragraph>
          <Box direction='row' gap='small' pad={{ bottom: 'small' }}>
            <Button
              label='view...'
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
