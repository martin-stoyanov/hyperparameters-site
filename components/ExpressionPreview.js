import PropTypes from 'prop-types';
import LineChart from './LineChart';
import evalExpression from './utils/evalExpression';

class ExpressionPreview extends React.Component {
  state = {
    data: [],
    argmin: undefined,
  };

  async componentDidMount() {
    const { expression, formatSnippet } = this.props;
    const { value: trials } = await evalExpression(expression, formatSnippet);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
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
  }
  render() {
    const { data, argmin } = this.state;
    return (
      <LineChart
        size='large'
        dataset={data.map(row => row.y)}
        labels={data.map(row => row.x)}
        style={{
          label: argmin ? (argmin.x || argmin || 0).toFixed(2) : '',
          pointRadius: 0,
          borderWidth: 5,
        }}
      />
    );
  }
}
ExpressionPreview.defaultProps = {
  formatSnippet: undefined,
};

ExpressionPreview.propTypes = {
  expression: PropTypes.string.isRequired,
  formatSnippet: PropTypes.func,
};

export default ExpressionPreview;
