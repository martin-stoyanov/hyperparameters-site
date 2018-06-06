import RandomState from '../../src/utils/RandomState';
// import RandomState from 'hyperparameters/src/utils/RandomState';
import { sample } from '../../src/base/stochastic';

export default (space, NSamples = 2000, seed = undefined) => {
  const arr = [];
  const rng = new RandomState(seed);
  for (let i = 0; i < NSamples; i += 1) {
    arr.push(sample(space, { rng }));
  }
  return arr;
};
