import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import PageLayout from './PageLayout';
import CodeSnippet from './editor/CodeSnippet';
import TrialsTable from './TrialsTable';
import ObjectValues from './ObjectValues';

export default class TensorflowExample extends React.Component {
  state = {
    trials: [],
  };
  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      best: trials.bestTrial(),
    });
  };

  onExperimentBegin = (idx, trial) => {
    const { stopping } = this.state;
    this.setState({ experimentBegin: { idx, trial } });
    return stopping;
  };

  onExperimentEnd = (idx, trial) => {
    const { trials, stopping } = this.state;
    this.setState({ experimentEnd: { idx, trial }, trials: [...trials, trial] });
    return stopping;
  };

  onEpochEnd = (epoch, logs) => {
    this.setState({ epoch, logs });
  };
  onStartExperiments = () => {
    this.setState({ trials: [], best: undefined });
  };
  renderCodeSnippet = () => {
    const { code } = this.props;
    return (
      <CodeSnippet
        evalParams={{
          onExperimentBegin: this.onExperimentBegin,
          onExperimentEnd: this.onExperimentEnd,
          onEpochEnd: this.onEpochEnd,
        }}
        onStopRequest={() => this.setState({ stopping: true })}
        onStart={this.onStartExperiments}
        onData={this.onData}
        code={code}
      />
    );
  };

  renderDescriptionPanel = () => {
    const {
      best, epoch, logs, experimentBegin, experimentEnd,
    } = this.state;
    let progress;
    if (epoch !== undefined) {
      progress = (
        <Box fill='horizontal' gap='small'>
          {experimentEnd && (
            <Box border={{ color: 'light-3', side: 'all' }}>
              <Box background='light-1' pad={{ horizontal: 'small' }}>
                experiment
              </Box>
              <Box pad='small' direction='row' align='center' justify='between' fill='horizontal' border='all'>
                <Box direction='row' gap='medium'>
                  <ObjectValues obj={{ '#': experimentEnd.idx }} />
                  <ObjectValues obj={experimentEnd.trial.args} />
                  <ObjectValues obj={{ loss: experimentEnd.trial.result.loss.toFixed(4) }} />
                </Box>
                <ObjectValues obj={{ epoch, loss: logs.loss.toFixed(4) }} />
              </Box>
            </Box>
          )}
          {false && (
            <Box border={{ color: 'light-3', side: 'all' }}>
              <Box background='light-1' pad={{ horizontal: 'small' }}>
                last trial
              </Box>
              <Box pad='small' direction='row' align='center' justify='between' fill='horizontal'>
                <Box direction='row' gap='medium'>
                  <ObjectValues obj={{ 'trial': experimentBegin.idx }} />
                  <ObjectValues obj={experimentBegin.trial.args} />
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      );
    }
    const items = (best && best.args) ? <ObjectValues obj={best.args} size='xxlarge' color='brand' /> : null;
    return (
      <Box pad={{ vertical: 'medium', right: 'medium' }} gap='small' fill='horizontal'>
        {progress}
        {best && (
          <Box>
            <Heading>
              Results (best):
            </Heading>
            {items}
          </Box>
          )}
      </Box>
    );
  };
  render() {
    const { description, name } = this.props;
    const { trials } = this.state;
    return (
      <PageLayout
        title={this.props.name}
        description={description}
      >
        <Box direction='row-responsive'>
          <Box margin={{ top: 'large' }} basis='1/2' align='start'>
            <Heading level={1} margin='none'>
              <strong>{name}</strong>
            </Heading>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            {this.renderDescriptionPanel()}
          </Box>
          <Box flex={true} pad={{ top: 'large' }} align='center'>
            {this.renderCodeSnippet()}
          </Box>
        </Box>
        <TrialsTable trials={trials} />
      </PageLayout>
    );
  }
}

TensorflowExample.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

TensorflowExample.defaultProps = {
  description: undefined,
};
