import PropTypes from 'prop-types';
import { Box, Heading, Anchor } from 'grommet';
import hp, { fmin, optimizers } from 'hyperparameters';
import Layout from './Layout';
import CodeSnippet from './CodeSnippet';

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

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snippet: props.code, annotations: [], modified: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  executeCodeSnippet = async (codeSnippet) => {
    const annotations = [];
    const reportError = (e) => {
      const error = { type: 'error' }
      const lineNumber = getLineNumber(e);
      if (lineNumber !== undefined) {
        error.row = lineNumber - 1;
      }
      error.text = e.message;
      annotations.push(error);
    };

    // It is important that codeSnippet and 'try {' be on the same line
    // in order to not modify the line number on an error.
    const evalString = `(async function runner() { try { ${codeSnippet
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
    const {
      children, description, name, example,
    } = this.props;
    const { snippet, annotations, modified } = this.state;
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
                <p dangerouslySetInnerHTML={{ __html: description }} />
              ) : null}
              {snippet ? (
                <Box fill='horizontal'>
                  <Box basis='xxsmall' align='end'>
                    {modified && (
                      <Anchor label='run' primary onClick={() => this.executeCodeSnippet(snippet)} />
                    )}
                  </Box>
                  <CodeSnippet
                    annotations={annotations}
                    code={snippet}
                    onLoad={() => this.executeCodeSnippet(snippet)}
                    onChange={value => this.setState({ modified: true, snippet: value })}
                  />

                </Box>
              ) : null}
            </Box>
            <Box flex={true} pad={{ top: 'large' }} align='center'>
              {example}
            </Box>
          </Box>
        </Box>
        {children}
      </Layout>
    );
  }
}

Example.propTypes = {
  description: PropTypes.string,
  example: PropTypes.node,
  onData: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

Example.defaultProps = {
  description: undefined,
  example: null,
};
