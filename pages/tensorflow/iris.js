import TensorflowExample from '../../components/TensorflowExample';
import irisTensorflowModel from '../../components/editor/tfjs_examples/iris';
import * as data from '../../data/iris';
// import testFunc from '../../components/editor/tfjs_tests/irisTestFunc';

export default () => (
  <TensorflowExample
    name='Iris tensorflow model'
    // testFunc={testFunc}
    description='<br /><div>Find best optimizer and number of layers for the the iris dataset.
      <ul><li>To change seed: on line 63: replace RandomState(54321) with any number
      Or, to get random results every time you run, remove the whole argument.</li>
      <li>To change the # of epochs: line 28</li>
      <li>To change # of trials: replace the 6 on line 62 with # of trials</li></ul>
      <a href = https://medium.com/@martin_stoyanov/hyperparameter-optimization-for-the-iris-dataset-in-javascript-81f81809275e?source=your_stories_page target="_blank">Blog post</a> on this topic
      </div>'
    code={irisTensorflowModel}
    data={data}
    labels={data.IRIS_CLASSES}
  />
);
