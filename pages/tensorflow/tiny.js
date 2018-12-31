import TensorflowExample from '../../components/TensorflowExample';
import tinyTensorflowModel from '../../components/editor/tfjs_examples/tiny';

export default () => (
  <TensorflowExample
    name='Tiny tensorflow model'
    description='<br />Find best optimizer and number of epochs for the "tiny" tensorflow.js sample.
    <ul>
      <li>To change seed: on line 34: replace RandomState(54321) with any number
      Or, to get random results every time you run, remove the whole argument.</li>
      <li>To change # of trials: replace the 10 on line 33 with # of trials</li>
    </ul>'
    code={tinyTensorflowModel}
  />
);
