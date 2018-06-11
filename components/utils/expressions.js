
export const unnamedParametersSolve =
`const space = hp.uniform('x', -3, 3);

const opt = x => (Math.pow(x, 2) - x - 2);
return fmin(opt, space, optimizers.rand.suggest, 300);
`;

export const namedParametersSolve =
`const space = {
  x: hp.uniform('x', -3, 3);
};  

const opt = ({ x }) => (Math.pow(x, 4) - Math.pow(x, 2));
return fmin(opt, space, optimizers.rand.suggest, 300);
`;
