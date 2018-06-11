import Example from '../../components/Example';
import LineChart from '../../components/LineChart';
import TrialsTable from '../../components/TrialsTable';
import { unnamedParametersSolve } from '../../components/utils/expressions';

export default class SolveEquationPage extends React.Component {
  state = {
    trials: [],
    data: [],
    argmin: undefined,
  };

  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      argmin: trials.argmin,
      data: trials.trials.map((trial) => {
        const x = trial.args.x !== undefined ? trial.args.x.toFixed(2) : trial.args.toFixed(2);
        return {
          x,
          y: trial.result.loss ? trial.result.loss.toFixed(2) : 0,
        };
      })
        .sort((a, b) => b.x - a.x)
        .reverse(),
    });
  };

  render() {
    const { data, argmin, trials } = this.state;
    return (
      <Example
        name='x ** 2 - x - 2'
        onData={this.onData}
        example={(
          <LineChart
            size='large'
            dataset={data}
            style={{
              label: argmin ? (argmin.x || argmin || 0).toFixed(2) : '',
              pointRadius: 0,
              borderWidth: 5,
            }}
            options={{
          legend: {
            display: false,
          },
          title: {
            display: true,
            fontStyle: 'bold',
            fontSize: 16,
            text: argmin ? `x = ${(argmin.x || argmin || 0).toFixed(2)}` : '',
          },
          scales: {
            xAxes: [{
              type: 'linear',
              position: 'bottom',
              callback: value => parseFloat(value).toFixed(1),
              ticks: {
                stepSize: 0.5,
                 autoSkip: true,
              },
            }],
          },
        }}
          />)}
        description='Simple equation solver. Uses unnamed single parameter in the search space and will find the x value for a minimum of y using the equation y = x ** 2 - x - 2.'
        code={unnamedParametersSolve}
      >
        <TrialsTable trials={trials} />
      </Example>
    );
  }
}
