import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import Layout from './Layout';
import CodeSnippet from './CodeSnippet';
import ExpressionChart from './ExpressionChart';
import TrialsTable from './TrialsTable';

export default class Example extends React.Component {
  state = {
    trials: [],
  };

  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      argmin: trials.argmin,
      data: trials.trials.map((trial) => {
        const x = typeof trial.args === 'object' ? trial.args[Object.keys(trial.args)[0]].toFixed(2) : trial.args.toFixed(2);
        return {
          x,
          y: trial.result.loss ? trial.result.loss.toFixed(2) : 0,
        };
      })
        .sort((a, b) => b.x - a.x)
        .reverse(),
    });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  renderSidePanel = () => {
    const { argmin, data } = this.state;
    return <ExpressionChart data={data} argmin={argmin} />;
  };

  renderDescriptionPanel = () => {
    const { code } = this.props;
    return (
      <CodeSnippet
        onData={this.onData}
        code={code}
      />
    );
  };

  render() {
    const { description, name } = this.props;
    const { trials } = this.state;
    return (
      <Layout
        title={this.props.name}
        description={description}
      >
        <Box pad={{ horizontal: 'large', top: 'large' }}>
          <Box direction='row-responsive'>
            <Box margin={{ vertical: 'large' }} basis='1/2' align='start'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {description ? (
                // eslint-disable-next-line react/no-danger
                <p dangerouslySetInnerHTML={{ __html: description }} />
              ) : null}
              {this.renderDescriptionPanel()}
            </Box>
            <Box flex={true} pad={{ top: 'large' }} align='center'>
              {this.renderSidePanel()}
            </Box>
          </Box>
          <TrialsTable trials={trials} />
        </Box>
      </Layout>
    );
  }
}

Example.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

Example.defaultProps = {
  description: undefined,
};
