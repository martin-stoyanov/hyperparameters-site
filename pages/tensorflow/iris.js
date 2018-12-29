import TensorflowExample from '../../components/TensorflowExample';
import irisTensorflowModel from '../../components/editor/tfjs_examples/iris';
import * as data from '../../data/iris';

export default () => (
  <TensorflowExample
    name='Iris tensorflow model'
    description='Find best optimizer and number of layers for the the iris dataset.'
    code={irisTensorflowModel}
    data={data}
  />
);
