import Example from '../../components/Example';
import TrialsTable from '../../components/TrialsTable';
import { unnamedParametersSolve } from '../../components/utils/expressions';
import ExpressionPreview from '../../components/ExpressionPreview';

export default class SolveEquationPage extends React.Component {
  state = {
    trials: [],
  };

  onData = (trials) => {
    this.setState({
      trials: trials.trials,
    });
  };

  render() {
    const { trials } = this.state;
    return (
      <Example
        name='x ** 2 - x - 2'
        onData={this.onData}
        example={(
          <ExpressionPreview expression={unnamedParametersSolve} onData={this.onData} />
        )}
        description='Simple equation solver. Uses unnamed single parameter in the search space and will find the x value for a minimum of y using the equation y = x ** 2 - x - 2.'
        code={unnamedParametersSolve}
      >
        <TrialsTable trials={trials} />
      </Example>
    );
  }
}
