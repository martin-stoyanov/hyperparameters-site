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
import { unnamedParametersSolve } from '../components/utils/expressions';

const Index = () => (
  <Layout title='Hyperparamer Optimization for Javascript'>
    <Box pad={{ horizontal: 'large' }}>
      <Section align='stretch' name='Parameter Expressions' index={0}>
        <Item name='hpjs.choice(label, options)' path='/choice'>
          <Box flex={true}>
            <ChartArray array={spaceToArray(hpjs.choice('choice', ['cat', 'dog']))} />
          </Box>
        </Item>
        <Item name='hpjs.randint(label, upper)' path='/randint'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.randint('random int', 5))}
              size='small'
              smoothing='0.01'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.uniform(label, low, high)' path='/uniform'>
          <Box flex={true} >
            <KDEChartArray
              rawData={spaceToArray(hpjs.uniform('uniform', 0, 5))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.quniform(label, low, high, q)' path='/quniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.quniform('quniform', 0, 5, 0.1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.loguniform(label, low, high)' path='/loguniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.loguniform('loguniform', 0, 5))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qloguniform(label, low, high, q)' path='/qloguniform'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qloguniform('qloguniform', 0, 5, 0.1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.normal(label, mu, sigma)' path='/normal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.normal('normal', 0, 1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qnormal(label, mu, sigma, q)' path='/qnormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qnormal('qnormal', 0, 1, 0.1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.lognormal(label, mu, sigma)' path='/lognormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.lognormal('lognormal', 0, 1))}
              size='small'
              style={{
                pointRadius: 0,
                borderWidth: 1,
              }}
            />
          </Box>
        </Item>
        <Item name='hpjs.qlognormal(label, mu, sigma, q)' path='/qlognormal'>
          <Box flex={true}>
            <KDEChartArray
              rawData={spaceToArray(hpjs.qlognormal('qlognormal', 0, 1, 0.1))}
              size='small'
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
      </Section>
    </Box>
  </Layout>
);
export default Index;
