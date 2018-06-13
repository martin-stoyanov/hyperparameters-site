import PropTypes from 'prop-types';
import { Box, Heading, Text } from 'grommet';
import Example from './Example';
import CodeSnippet from './CodeSnippet';

export default class TensorflowExample extends Example {
  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      argmin: trials.argmin,
      best: trials.bestTrial(),
    });
  };

  onExperimentBegin = (idx, trial) => {
    this.setState({ experimentBegin: { idx, trial } });
  };

  onExperimentEnd = (idx, trial) => {
    const { trials } = this.state;
    this.setState({ experimentEnd: { idx, trial }, trials: [...trials, trial] });
  };

  onEpochEnd = (epoch, logs) => {
    this.setState({ epoch, logs });
  };
  onStartExperiments = () => {
    console.log('onStartExperiments');
    this.setState({ trials: [] });
  };
  renderSidePanel = () => {
    const { code } = this.props;
    return (
      <CodeSnippet
        evalParams={{
          onExperimentBegin: this.onExperimentBegin,
          onExperimentEnd: this.onExperimentEnd,
          onEpochEnd: this.onEpochEnd,
        }}
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
        <Box direction='row' align='center' justify='between'>
          <Box>
            {false && console.log(experimentEnd.trial.args, experimentEnd.trial.result)}
          </Box>
          <Box>
            {false && console.log(experimentBegin.trial.args)}
          </Box>
          <Box direction='row' gap='small'>
            <Text size='large'>{`Epoch: ${epoch}`}</Text>
            <Text size='large'>{`Loss: ${logs.loss.toFixed(4)}`}</Text>
          </Box>
        </Box>
      );
    }
    const items = (best && best.args) ? Object.keys(best.args).map(key => (
      <Box key={`best_trials_${key}`} direction='row' gap='medium'>
        <Heading margin='none' level={2}>{`${key}: ${best.args[key]}`}</Heading>
      </Box>
    )) : null;

    return (
      <Box pad={{ vertical: 'medium' }} gap='small'>
        {progress}
        {best && (
          <Box>
            <Heading>
              Best parameters:
            </Heading>
            {items}
          </Box>
          )}
      </Box>
    );
  };
}

TensorflowExample.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

TensorflowExample.defaultProps = {
  description: undefined,
};
