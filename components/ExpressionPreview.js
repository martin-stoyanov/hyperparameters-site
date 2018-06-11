import PropTypes from 'prop-types';
import evalExpression from './utils/evalExpression';
import ExpressionChart from './ExpressionChart';

class ExpressionPreview extends React.Component {
  state = {
    data: [],
    argmin: undefined,
  };

  async componentDidMount() {
    const { expression, formatSnippet, onData } = this.props;
    const { value: trials } = await evalExpression(expression, formatSnippet);
    if (onData) {
      onData(trials);
    }
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
      <ExpressionChart
        data={data}
        argmin={argmin}
      />
    );
  }
}
ExpressionPreview.defaultProps = {
  formatSnippet: undefined,
  onData: undefined,
};

ExpressionPreview.propTypes = {
  expression: PropTypes.string.isRequired,
  formatSnippet: PropTypes.func,
  onData: PropTypes.func,
};

export default ExpressionPreview;
