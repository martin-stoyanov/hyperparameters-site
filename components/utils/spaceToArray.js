import { RandomState, sample } from 'hyperparameters';

export default (space, NSamples = 800, seed = undefined) => {
  const arr = [];
  const rng = new RandomState(seed);
  for (let i = 0; i < NSamples; i += 1) {
    arr.push(sample(space, { rng }));
  }
  return arr;
};
