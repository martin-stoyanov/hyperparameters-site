import Example from '../../components/Example';
import { unnamedParametersSolve } from '../../components/editor/expressions';

export default () => (
  <Example
    name='x ** 2 - x - 2'
    description='Simple equation solver. Uses unnamed single parameter in the search space and will find the x value for a minimum of y using the equation y = x ** 2 - x - 2.'
    code={unnamedParametersSolve}
  />
);
