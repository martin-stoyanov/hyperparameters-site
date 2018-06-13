import TensorflowExample from '../../components/TensorflowExample';
import { tinyTensorflowModel } from '../../components/utils/expressions';

export default () => (
  <TensorflowExample
    name='Tiny tensorflow model'
    description='Find best optimizer and number of epochs for the "tiny" tensorflow.js sample.'
    code={tinyTensorflowModel}
  />
);
