import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import Layout from './Layout';
import CodeSnippet from './CodeSnippet';

export default class Example extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      children, description, name, example, code, onData,
    } = this.props;
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
              <CodeSnippet
                onData={onData}
                code={code}
              />
            </Box>
            <Box flex={true} pad={{ top: 'large' }} align='center'>
              {example}
            </Box>
          </Box>
          {children}
        </Box>
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
