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
        <Image style={{ maxWidth: '100%', height: 'auto' }} src='/static/img/randint.png' />
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
          <Image style={{ width: '100%', height: 'auto' }} src='/static/img/smallTensorflowTable.png' />
        </Box>
      </Box>
    </Box>
    <Box>
      <Box align='center'><Heading level='2'>Getting started</Heading></Box>
      <Box align='center' pad={{ horizontal: 'xlarge' }}>
        <Text size='medium' color='black' margin={{ bottom: 'small' }}>There are two ways to get TensorFlow.js and hpjs: via script tags or installing from npm</Text>
        <Text size='large' weight='700' color='brand'>Using script tags</Text>
        <Text size='medium' color='black' margin='xsmall'>The below code can be directly copied and pasted into an html file</Text>
        <CodeExample
          code={`<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest"> </script>
    <script src="https://cdn.jsdelivr.net/npm/hyperparameters@latest/dist/hyperparameters.min.js"> </script>
  </head>
  <body>
    <button onclick="hyperTFJS()">click to run tf model</button>
  </body>

  <script>

    // An optimization function. The parameters are optimizer and epochs and will use the loss returned by the fn to measure which parameters are "best"
    // Input and output data are passed as second argument
    const optFunction = async ({ optimizer, epochs }, { xs, ys }) => {

      // Create a simple sequential model.
      const model = tf.sequential();

      // add a dense layer to the model and compile
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
      model.compile({
        loss: 'meanSquaredError',
        optimizer,
      });

      // train model using defined data
      const h = await model.fit(xs, ys, {epochs});

      //printint out each optimizer and its loss
      console.log(optimizer, h.history.loss[h.history.loss.length - 1]);
      return { loss: h.history.loss[h.history.loss.length - 1], status: hpjs.STATUS_OK } ;
    };

    async function hyperTFJS(){

      // Generating some data for training (y = 2x - 1) in tf tensors and defining its shape
      const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
      const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

      // defining a search space we want to optimize. Using hpjs parameters here
      const space = { 
        optimizer: hpjs.choice(['sgd', 'adagrad', 'adam', 'adamax', 'rmsprop']),
        epochs: hpjs.quniform(50, 200, 50),
      };

      // finding the optimal hyperparameters using hpjs.fmin. Here, 6 is the # of times the optimization function will be called (which can be changed)
      const trials = await hpjs.fmin(
        optFunction, space, hpjs.search.randomSearch, 6,
        { rng: new hpjs.RandomState(654321), xs, ys }
      );

      const opt = trials.argmin;

      //printing out data
      console.log('trials', trials);
      console.log('best optimizer:', opt.optimizer);
      console.log('best epochs:', opt.epochs);
    }
  </script>
</html>`}
        />
      </Box>
      <Box align='center' pad={{ vertical: 'small', horizontal: 'xlarge' }}>
        <Text size='large' weight='700' color='brand'>via NPM</Text>
        <Text size='medium' color='black' margin='medium'>
        The example below is in React/Webpack.
        </Text>
        <CodeExample
          code='$ npm install hyperparameters'
        />
        <Box alignSelf='start' pad={{ vertical: 'small' }}>
          <Text size='medium' color='black'>or</Text>
        </Box>
        <CodeExample
          code='$ yarn add hyperparameters'
        />
        <br />
        <CodeExample
          code={`import * as tf from '@tensorflow/tfjs';
import * as hpjs from 'hyperparameters';

const optimizers = {
  sgd: tf.train.sgd,
  adagrad: tf.train.adagrad,
  adam: tf.train.adam,
  adamax: tf.train.adamax,
  rmsprop: tf.train.rmsprop,
}

class Index extends React.Component { 
  componentDidMount() {
    this.hyperTFJS();
  }
    // An optimization function. The parameters are optimizer and epochs and will use the loss returned by the fn to measure which parameters are "best"
    // Input and output data are passed as second argument
    optFunction = async ({ learningRate, optimizer }, { xs, ys }) => {

      // Create a simple sequential model.
      const model = tf.sequential();


      // add a dense layer to the model and compile
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
      model.compile({
        loss: 'meanSquaredError',
        optimizer: optimizers[optimizer](learningRate),
      });

      // train model using defined data
      const h = await model.fit(xs, ys, 250);

      //printint out each optimizer and its loss
      console.log(optimizer);
      console.log('learning rate: ', learningRate, 'loss: ', h.history.loss[h.history.loss.length - 1]);
      return { loss: h.history.loss[h.history.loss.length - 1], status: hpjs.STATUS_OK } ;
    };

    hyperTFJS = async () => {

      // Generating some data for training (y = 2x - 1) in tf tensors and defining its shape
      const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
      const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
      

      // defining a search space we want to optimize. Using hpjs parameters here
      const space = {
        learningRate: hpjs.uniform(0.0001, 0.1),
        optimizer: hpjs.choice(['sgd', 'adagrad', 'adam', 'adamax', 'rmsprop']),
      };

      // finding the optimal hyperparameters using hpjs.fmin. Here, 6 is the # of times the optimization function will be called (this can be changed)
      const trials = await hpjs.fmin(
        this.optFunction, space, hpjs.search.randomSearch, 6,
        { rng: new hpjs.RandomState(654321), xs, ys }
      );

      const opt = trials.argmin;

      //printing out data
      console.log('trials', trials);
      console.log('best optimizer:', opt.optimizer);
      console.log('best learning rate:', opt.learningRate);
    }
    render() {
      return( 
        <div>  
        </div> 
      );
  }
}
export default Index;`}
        />
      </Box>
    </Box>
  </Layout>
);

export default Index;
