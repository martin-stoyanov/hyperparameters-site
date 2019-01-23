import React from 'react';
import TensorflowExample from '../../components/TensorflowExample';
import mnistTensorflowModel from '../../components/editor/tfjs_examples/mnist';
// import testFunc from '../../components/editor/tfjs_tests/mnistTestFunc';
import { MnistData, MNIST_CLASSES } from '../../data/mnist';

class MnistPage extends React.Component {
  state = { data: undefined }
  async componentDidMount() {
    const data = new MnistData();
    await data.load();
    this.setState({ data }); // eslint-disable-line
  }
  render() {
    const { data } = this.state;
    return (
      <TensorflowExample
        name='Mnist tensorflow model'
        description='<br /><div>Find best optimizer and number of layers for the the iris dataset.
        <ul><li>To change seed: on line 63: replace RandomState(54321) with any number
        Or, to get random results every time you run, remove the whole argument.</li>
        <li>To change the # of epochs: line 28</li>
        <li>To change # of trials: replace the 6 on line 62 with # of trials</li></ul>
        <a href = https://medium.com/@martin_stoyanov/hyperparameter-optimization-for-the-iris-dataset-in-javascript-81f81809275e?source=your_stories_page target="_blank">Blog post</a> on this topic
          </div>'
        code={mnistTensorflowModel}
        data={data}
        // testFunc={testFunc}
        labels={MNIST_CLASSES}
      />
    );
  }
}
export default MnistPage;
