
export const unnamedParametersSolve =
`const space = hpjs.uniform(-3, 3);

const opt = x => (Math.pow(x, 2) - x - 2);
return hpjs.fmin(opt, space, hpjs.search.randomSearch, 300);
`;

export const namedParametersSolve =
`const space = {
  x: hpjs.uniform(-3, 3);
};  

const opt = ({ x }) => (Math.pow(x, 4) - Math.pow(x, 2));
return hpjs.fmin(opt, space, hpjs.search.randomSearch, 300);
`;

