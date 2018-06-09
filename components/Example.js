import PropTypes from 'prop-types';
import { Box, Heading, Button } from 'grommet';
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
    this.state = { snippet: props.code };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  executeCodeSnippet = async (codeSnippet) => {
    const reportError = (e) => {
      let errorMessage = '\n<div class="snippet-error"><em>An error occured';
      const lineNumber = getLineNumber(e);
      if (lineNumber !== undefined) {
        errorMessage += ` on line: ${lineNumber}</em>`;
      } else {
        errorMessage += '</em>';
      }
      errorMessage += '<br/>';
      errorMessage += `<div class="snippet-error-msg">${e.message}</div>`;
      errorMessage += '</div>';

      console.log(errorMessage);
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
    window.hp = undefined;
    window.fmin = undefined;
    window.optimizers = undefined;

    // tf.ENV.engine.endScope();
  };

  render() {
    const {
      children, description, name, example, onData,
    } = this.props;
    const { snippet } = this.state;
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
                <Box pad={{ bottom: 'large' }} fill='horizontal'>
                  <Button label='run' onClick={() => this.executeCodeSnippet(snippet)} />
                  <CodeSnippet
                    code={snippet}
                    onLoad={() => this.executeCodeSnippet(snippet)}
                    onChange={value => this.setState({ snippet: value })}
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
