import React from 'react';
import { Box } from 'grommet';
import * as hpjs from 'hyperparameters';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Item from '../components/Item';
import spaceToArray from '../components/utils/spaceToArray';
import ChartArray from '../components/ChartArray';
import KDEChartArray from '../components/KDEChartArray';
import ExpressionPreview from '../components/ExpressionPreview';
import { unnamedParametersSolve } from '../components/editor/expressions';
import TensorflowPreview from '../components/TensorflowPreview';

const Explore = () => (
  <Layout title='Hyperparamer Optimization for Javascript'>
    <Box pad={{ horizontal: 'large' }}>
      <Section align='stretch' name='parameter expressions' index={0}>
        <Item name='hpjs.choice(options)' path='/choice'>
          <Box flex={true}>
            <ChartArray array={spaceToArray(hpjs.choice(['cat', 'dog']))} />
          </Box>
        </Item>
        <Item name='hpjs.randint(upper)' path='/randint'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.randint(5))}
              size='small'
              smoothing='0.01'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.uniform(low, high)' path='/uniform'>
          <Box flex={true} >
            <KDEChartArray
              rawData={spaceToArray(hpjs.uniform(0, 5))}
              size='small'
              smoothing='0.3'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.quniform(low, high, q)' path='/quniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.quniform(0, 5, 0.5))}
              size='small'
              smoothing='0.01'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.loguniform(low, high)' path='/loguniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.loguniform(0, 5))}
              size='small'
              smoothing='2'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qloguniform(low, high, q)' path='/qloguniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qloguniform(0, 5, 5))}
              size='small'
              smoothing='0.15'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.normal(mu, sigma)' path='/normal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.normal(0, 1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qnormal(mu, sigma, q)' path='/qnormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qnormal(0, 1, 0.5))}
              size='small'
              smoothing='0.01'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.lognormal(mu, sigma)' path='/lognormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.lognormal(0, 1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qlognormal(mu, sigma, q)' path='/qlognormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qlognormal(0, 1, 0.5))}
              size='small'
              smoothing='0.025'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
      </Section>
      <Section align='stretch' name='fmin examples' index={1}>
        <Item name='x ** 2 - x - 2' path='/fmin/solve_equation'>
          <Box flex={true}>
            <ExpressionPreview expression={unnamedParametersSolve} />
          </Box>
        </Item>
        <Item name='Tiny tensorflow' path='/tensorflow/tiny'>
          <TensorflowPreview
            items={{ optimizer: 'sgd', epochs: 250 }}
            description='find best optimizer and number of epochs for the "tiny" tensorflow.js sample'
          />
        </Item>
      </Section>
    </Box>
  </Layout>
);
export default Explore;
