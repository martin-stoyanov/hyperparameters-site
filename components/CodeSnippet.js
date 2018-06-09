import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Anchor } from 'grommet';
import hp, { fmin, optimizers } from 'hyperparameters';

const CodeEditor = dynamic(import('./CodeEditor'), {
  ssr: false,
});

function getLineNumber(error) {
  try {
    // firefox
    const firefoxRegex = /eval:(\d+):\d+/;
    if (error.stack.match(firefoxRegex)) {
      const res = error.stack.match(firefoxRegex);
      return parseInt(res[1], 10);
    }

    // chrome
    const chromeRegex = /eval.+:(\d+):\d+/;
    if (error.stack.match(chromeRegex)) {
      const res = error.stack.match(chromeRegex);
      return parseInt(res[1], 10);
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

class CodeSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snippet: props.code, annotations: [], modified: false };
  }
  executeCodeSnippet = async (codeSnippet) => {
    const { formatSnippet = p => p } = this.props;
    const annotations = [];
    const reportError = (e) => {
      const error = { type: 'error' };
      const lineNumber = getLineNumber(e);
      if (lineNumber !== undefined) {
        error.row = lineNumber - 1;
      }
      error.text = e.message;
      annotations.push(error);
    };

      // It is important that codeSnippet and 'try {' be on the same line
      // in order to not modify the line number on an error.
    const evalString = `(async function runner() { try { ${formatSnippet(codeSnippet)
    }} catch (e) { reportError(e); } })()`;

    window.hp = hp;
    window.fmin = fmin;
    window.optimizers = optimizers;

    // tf.ENV.engine.startScope();
    try {
      // eslint-disable-next-line no-eval
      const value = await eval(evalString)
        .catch((e) => {
          // This catch is for errors within promises within snippets
          reportError(e);
        });
      this.props.onData(value);
    } catch (e) {
      reportError(e);
    }
    this.setState({ annotations, modified: false });
    window.hp = undefined;
    window.fmin = undefined;
    window.optimizers = undefined;

    // tf.ENV.engine.endScope();
  };
  render() {
    const { snippet, annotations, modified } = this.state;
    return snippet ? (
      <Box fill='horizontal'>
        <Box basis='xxsmall' align='end'>
          {modified && (
          <Anchor label='run' primary={true} onClick={() => this.executeCodeSnippet(snippet)} />
            )}
        </Box>
        <CodeEditor
          annotations={annotations}
          code={snippet}
          onLoad={() => this.executeCodeSnippet(snippet)}
          onChange={value => this.setState({ modified: true, snippet: value })}
        />

      </Box>
    ) : null;
  }
}
export default CodeSnippet;
