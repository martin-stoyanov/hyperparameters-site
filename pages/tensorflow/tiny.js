import TensorflowExample from '../../components/TensorflowExample';
import { tinyTensorflowModel } from '../../components/utils/expressions';

export default () => (
  <TensorflowExample
    name='Tiny tensorflow model'
    description='Tiny tensorflow model.'
    code={tinyTensorflowModel}
  />
);
