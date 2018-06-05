import RandomState from '../../src/utils/RandomState';
import { sample } from '../../src/pyll/stochastic';

export default (space, NSamples = 500, seed = undefined) => {
  const arr = [];
  for (let i = 0; i < NSamples; i += 1) {
    arr.push(sample(space, { rng: new RandomState(seed) }));
  }
  return arr;
};
