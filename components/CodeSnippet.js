import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Text, Anchor } from 'grommet';
import evalExpression from './utils/evalExpression';


const CodeEditor = dynamic(import('./CodeEditor'), {
  ssr: false,
});


class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snippet: props.code, annotations: [], modified: false };
  }

  executeCodeSnippet = async (codeSnippet) => {
    const { formatSnippet, evalParams, onStart } = this.props;
    if (onStart) {
      onStart(codeSnippet);
    }
    const { errors, value } = await evalExpression(codeSnippet, formatSnippet, evalParams);
    if (value !== undefined) {
      this.props.onData(value);
      this.setState({ modified: false });
    } else {
      this.setState({ annotations: errors, modified: false });
    }
  };

  render() {
    const {
      code, ondata, evalParams, ...rest
    } = this.props;
    const nLines = code.split(/\r\n|\r|\n/).length;
    const { snippet, annotations, modified } = this.state;
    return snippet ? (
      <Box fill='horizontal'>
        <Box pad={{ horizontal: 'small' }} basis='xxsmall' justify='between' background='light-1' direction='row' align='center'>
          <Text weight={200}>
            edit code snippet:
          </Text>
          {modified && (
          <Anchor label='run' primary={true} onClick={() => this.executeCodeSnippet(snippet)} />
            )}
        </Box>
        <CodeEditor
          annotations={annotations}
          code={snippet}
          onLoad={() => this.executeCodeSnippet(snippet)}
          onChange={value => this.setState({ modified: true, snippet: value })}
          height={`${(nLines + 1) * 16}px`}
          {...rest}
        />

      </Box>
    ) : null;
  }
}
export default CodeSnippet;
