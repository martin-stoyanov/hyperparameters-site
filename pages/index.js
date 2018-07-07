/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Box, Heading, Paragraph, Image, Text, Button, Anchor } from 'grommet';
import Link from 'next/link';
import CodeExample from '../components/editor/CodeExample';
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
          <Heading level='3'>Can be used in 2 ways</Heading>
          <Paragraph>
            Link hpjs in your html file from cdn, or install in your project with <Anchor href='https://github.com/atanasster/hyperparameters' target='_blank' rel='noopener noreferrer'>npm</Anchor>
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
    </Box>
    <Box>
      <Box align='center'><Heading level='2'>Getting started</Heading></Box>
      <Box align='center' pad={{ vertical: 'small', horizontal: 'xlarge' }}>
        <Text size='large' weight='700' color='brand'>Include in html file</Text>
        <CodeExample
          code={`
const space = {
  optimizer: hpjs.choice(['sgd', 'adam', 'adagrad', 'rmsprop']),
  epochs: hpjs.quniform(50, 250, 50),
};

//create tensorflow.js train function. Parameters are optimizer and epochs. input and output data passed as second argument
const trainModel = async ({ optimizer, epochs }, { xs, ys }) => {
  // Create a simple model.
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  // Prepare the model for training: Specify the loss and the optimizer.
  model.compile({
    loss: 'meanSquaredError',
    optimizer
  });
  // Train the model using the data.
  const h = await model.fit(xs, ys, { epochs });
  return { model, loss: h.history.loss[h.history.loss.length - 1] };
};
//create optimization function
const modelOpt = async ({ optimizer, epochs }, { xs, ys }) => {
  const { loss } = await trainModel({ optimizer, epochs }, { xs, ys });
  return { loss, status: hpjs.STATUS_OK };
};

//find optimal hyperparameters
const trials = await hpjs.fmin(
  modelOpt, space, hpjs.search.randomSearch, 10,
  { rng: new hpjs.RandomState(654321), xs, ys }
);
const opt = trials.argmin;
console.log('best optimizer',opt.optimizer);
console.log('best no of epochs', opt.epochs);`}
        />
      </Box>
      <Box align='center' pad='small'>
        <Text size='large' weight='700' color='brand'>Install with npm</Text>
      </Box>
    </Box>
  </Layout>
);

export default Index;
