import React from 'react';
import { Box } from 'grommet';
// import hpe from 'hyperparameters/src';
// import hp from '../src';
// import RandomState from '../src/utils/RandomState';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Item from '../components/Item';
import spaceToArray from '../components/utils/spaceToArray';
import ChartArray from '../components/ChartArray';
import KDEChartArray from '../components/KDEChartArray';
import hp from '../src';


const Index = () => (
  <Layout title='Hyperparamer Optimization for Javascript'>
    <Box pad={{ horizontal: 'large' }}>
      <Section align='stretch' name='Parameter Expressions' index={0}>
        <Item name='hp.choice(label, options)' path='/choice'>
          <Box flex={true}>
            <ChartArray array={spaceToArray(hp.choice('choice', ['cat', 'dog']))} labels='["cat", "dog"]' />
          </Box>
        </Item>
        <Item name='hp.randint(label, upper)' path='/randint'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.randint('random int', 5))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.uniform(label, low, high)' path='/uniform'>
          <Box flex={true} >
            <KDEChartArray rawData={spaceToArray(hp.uniform('uniform', 0, 5))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.quniform(label, low, high, q)' path='/quniform'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.quniform('quniform', 0, 5, 0.1))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.loguniform(label, low, high)' path='/loguniform'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.loguniform('loguniform', 0, 5))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.qloguniform(label, low, high, q)' path='/qloguniform'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.qloguniform('qloguniform', 0, 5, 0.1))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.normal(label, mu, sigma)' path='/normal'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.normal('normal', 0, 1))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.qnormal(label, mu, sigma, q)' path='/qnormal'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.qnormal('qnormal', 0, 1, 0.1))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.lognormal(label, mu, sigma)' path='/lognormal'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.lognormal('lognormal', 0, 1))} onHomePage='true' />
          </Box>
        </Item>
        <Item name='hp.qlognormal(label, mu, sigma, q)' path='/qlognormal'>
          <Box flex={true}>
            <KDEChartArray rawData={spaceToArray(hp.qlognormal('qlognormal', 0, 1, 0.1))} onHomePage='true' />
          </Box>
        </Item>
      </Section>
    </Box>
  </Layout>
);
export default Index;
