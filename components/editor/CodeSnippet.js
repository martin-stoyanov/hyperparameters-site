import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Text, Anchor } from 'grommet';
import evalExpression from './evalExpression';


const CodeEditor = dynamic(import('./CodeEditor'), {
  ssr: false,
});


class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false, snippet: props.code, annotations: [], modified: false,
    };
  }

  executeCodeSnippet = (codeSnippet) => {
    setTimeout(async () => {
      const { formatSnippet, evalParams, onStart } = this.props;

      if (onStart) {
        onStart(codeSnippet);
      }
      this.setState({ running: true });
      try {
        const { errors, value } = await evalExpression(codeSnippet, formatSnippet, evalParams);
        if (value !== undefined) {
          this.props.onData(value);
          this.setState({
            modified: false,
            running: false,
          });
        } else {
          this.setState({
            annotations: errors,
            modified: false,
            running: false,
          });
        }
      } catch (e) {
        console.error(e);
        this.setState({ running: false });
      }
    }, 300);
  };

  onRunClick = () => {
    const { onStopRequest } = this.props;
    const { running, snippet } = this.state;
    if (!running && snippet) {
      this.executeCodeSnippet(snippet);
    } else if (onStopRequest) {
      onStopRequest();
    }
  };

  render() {
    const {
      code, ondata, evalParams, ...rest
    } = this.props;
    const {
      snippet, annotations, modified, running,
    } = this.state;
    return snippet ? (
      <Box fill='horizontal'>
        <Box pad={{ horizontal: 'small' }} basis='xxsmall' justify='between' background='light-1' direction='row' align='center'>
          <Text weight={200}>
            {running ? 'running...' : `edit code snippet${modified ? '*' : ''}`}
          </Text>
          <Anchor
            label={running ? 'stop' : 'run'}
            primary={true}
            onClick={this.onRunClick}
          />
        </Box>
        <CodeEditor
          annotations={annotations}
          code={snippet}
          onLoad={() => this.executeCodeSnippet(snippet)}
          onChange={value => this.setState({ modified: true, snippet: value })}
          {...rest}
        />

      </Box>
    ) : null;
  }
}
export default CodeSnippet;
