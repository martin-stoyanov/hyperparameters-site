import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import * as tfvis from '@tensorflow/tfjs-vis';
import { Box, Heading } from 'grommet';
import PageLayout from './PageLayout';
import CodeSnippet from './editor/CodeSnippet';
import TrialsTable from './TrialsTable';
import ObjectValues from './ObjectValues';

export default class TensorflowExample extends React.Component {
  state = {
    trials: [],
    trainLogs: [],
  };
  onData = (trials) => {
    this.setState({
      trials: trials.trials,
      best: trials.bestTrial(),
    });
  };

  onExperimentBegin = (idx, trial) => {
    const { stopping } = this.state;
    this.setState({ experimentBegin: { idx, trial }, trainLogs: [] });
    return stopping;
  };

  onExperimentEnd = (idx, trial) => {
    const { trials, stopping } = this.state;
    this.setState({ experimentEnd: { idx, trial }, trials: [...trials, trial] });
    return stopping;
  };

  onEpochEnd = (epoch, logs) => {
    const trainLogs = [...this.state.trainLogs, logs];
    if (this.lossContainer) {
      tfvis.show.history(this.lossContainer, trainLogs, ['loss', 'val_loss'],
        {
          width: this.lossContainer.offsetWidth,
          height: this.lossContainer.offsetHeight,
          yLabel: 'loss',
          xLabel: 'epoch',
        });
    }
    if (this.accContainer) {
      tfvis.show.history(this.accContainer, trainLogs, ['acc', 'val_acc'],
        {
          width: this.accContainer.offsetWidth,
          height: this.accContainer.offsetHeight,
          yLabel: 'accuracy',
          xLabel: 'epoch',
        });
    }
    this.setState({ epoch, logs, trainLogs });
  };
  onStartExperiments = () => {
    this.setState({
      trials: [],
      best: undefined,
      experimentBegin: undefined,
      experimentEnd: undefined,
      stopping: false,
    });
  };
  renderCodeSnippet = () => {
    const { code, data } = this.props;
    return (
      <CodeSnippet
        evalParams={{
          onExperimentBegin: this.onExperimentBegin,
          onExperimentEnd: this.onExperimentEnd,
          onEpochEnd: this.onEpochEnd,
          data,
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
      const hasAccuracy = (logs.acc !== undefined && logs.val_acc !== undefined);
      progress = (
        <Box fill='horizontal' gap='small' >
          <Box direction='row' gap='medium' height='small' pad={{ vertical: 'medium' }}>
            <Box
              width={hasAccuracy ? '50%' : '100%'}
              fill='vertical'
            >
              <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                loss
              </Box>
              <Box
                ref={(r) => { this.lossContainer = findDOMNode(r); }}
                fill='vertical'
              />
            </Box>
            {hasAccuracy && (
              <Box
                width='50%'
                fill='vertical'
              >
                <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                  accuracy
                </Box>
                <Box
                  ref={(r) => { this.accContainer = findDOMNode(r); }}
                  fill='vertical'
                />
              </Box>
            )}
          </Box>

          {experimentEnd && (
            <Box border={{ color: 'light-3', side: 'all' }} gap='small'>
              <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                experiment
              </Box>
              <Box wrap={true} direction='row' align='center' justify='between' fill='horizontal'>
                <Box direction='row' gap='medium'>
                  <ObjectValues obj={{ '#': experimentEnd.idx }} />
                  <ObjectValues obj={experimentEnd.trial.args} />
                  <ObjectValues
                    obj={
                      {
                        loss: experimentEnd.trial.result.loss !== undefined ?
                          experimentEnd.trial.result.loss.toFixed(4) : undefined,
                        accuracy: experimentEnd.trial.result.accuracy !== undefined ?
                          experimentEnd.trial.result.accuracy.toFixed(4) : undefined,
                      }
                    }
                  />
                </Box>
                <ObjectValues obj={
                  {
                    epoch,
                    loss: experimentEnd.trial.result.loss !== undefined ?
                      logs.loss.toFixed(4) : undefined,
                    accuracy: experimentEnd.trial.result.accuracy !== undefined ?
                      logs.acc.toFixed(4) : undefined,

                  }}
                />
              </Box>
            </Box>
          )}
          {false && (
            <Box border={{ color: 'light-3', side: 'all' }}>
              <Box background='light-1' pad={{ horizontal: 'small' }} border={{ color: 'light-3', side: 'bottom' }}>
                last trial
              </Box>
              <Box pad='small' wrap={true} direction='row' align='center' justify='between' fill='horizontal'>
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
              best result:
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
  data: PropTypes.any,
};

TensorflowExample.defaultProps = {
  description: undefined,
  data: undefined,
};
