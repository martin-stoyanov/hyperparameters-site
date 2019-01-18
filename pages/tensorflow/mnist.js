import React from 'react';
import TensorflowExample from '../../components/TensorflowExample';
import mnistTensorflowModel from '../../components/editor/tfjs_examples/mnist';
// import testFunc from '../../components/editor/tfjs_tests/mnistTestFunc';
import { MnistData } from '../../data/mnist';

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
          </div>'
        code={mnistTensorflowModel}
        data={data}
        testFunc={undefined}
      />
    );
  }
}
export default MnistPage;
