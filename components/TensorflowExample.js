import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
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
  renderSidePanel = () => {
    const { code } = this.props;
    return (
      <CodeSnippet
        onData={this.onData}
        code={code}
      />
    );
  };

  renderDescriptionPanel = () => {
    const { best } = this.state;
    const items = (best && best.args) ? Object.keys(best.args).map(key => (
      <Box key={`best_trials_${key}`} direction='row' gap='medium'>
        <Heading margin='none' level={2}>{`${key}: ${best.args[key]}`}</Heading>
      </Box>
    )) : null;

    return (
      <Box pad={{ vertical: 'medium' }}>
        <Heading>
          Best parameters:
        </Heading>
        {items}
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
