import React from 'react';
import { Box } from 'grommet';
import hp from '../src';
// import RandomState from '../src/utils/RandomState';
import { sample } from '../src/pyll/stochastic';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Item from '../components/Item';
import spaceToArray from '../components/utils/spaceToArray';
import ChartArray from '../components/ChartArray';
import KDEChartArray from '../components/KDEChartArray';


const getData = () => {
  const seededSample = space => sample(space);
  const randIntArr = [];
  const uniformArr = [];
  const loguniformArr = [];
  const qloguniformArr = [];
  let hyperparamGenerators;
  const NSamples = 5;
  for (let i = 0; i < NSamples; i += 1) {
    hyperparamGenerators = {
      randint: seededSample(hp.randint('randint', 5)),
      uniform: seededSample(hp.uniform('uniform', -2, 2)),
      loguniform: seededSample(hp.loguniform('loguniform', -2, 2)),
      qloguniform: seededSample(hp.qloguniform('qloguniform', -2, 2, 0.1)),
    };
    randIntArr.push(hyperparamGenerators.randint);
    uniformArr.push(hyperparamGenerators.uniform);
    loguniformArr.push(hyperparamGenerators.loguniform);
    qloguniformArr.push(hyperparamGenerators.qloguniform);
    console.log(Object.entries(hyperparamGenerators));
  }
  console.log(loguniformArr);
  console.log(qloguniformArr);
};
const Index = () => (
  <Layout>
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
