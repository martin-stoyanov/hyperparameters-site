import PropTypes from 'prop-types';
import { Box, Heading, Text, Markdown } from 'grommet';
import Layout from './Layout';
import DocProperty from './DocProperty';
import spaceToArray from './utils/spaceToArray';
import KDEChartArray from './KDEChartArray';
import CodeSnippet from './editor/CodeSnippet';

export default class Doc extends React.Component {
  state = {
    rawdata: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onData = (data) => {
    this.setState({ rawdata: spaceToArray(data) });
  };
  render() {
    const {
      children, desc, name, examples, code, example, style, size,
    } = this.props;
    let { smoothing } = this.props;
    const { rawdata } = this.state;
    if (code.includes('hpjs.uniform') || code.includes('hpjs.normal')) {
      smoothing = (0.3 * ((Math.max(...rawdata) - Math.min(...rawdata)) / 5)).toString();
    }
    if (code.includes('hpjs.randint') || code.includes('hpjs.quniform') || code.includes('hpjs.qnormal')) {
      smoothing = (0.01 * ((Math.max(...rawdata) - Math.min(...rawdata)) / 5)).toString();
    }
    if (code.includes('hpjs.loguniform')) {
      smoothing = (0.3 * ((Math.max(...rawdata) - Math.min(...rawdata)) / 8)).toString();
    }
    if (smoothing < 0) {
      smoothing = 0.35;
    }
    return (
      <Layout
        title={this.props.name}
        description={desc && desc.description}
      >
        <Box pad={{ horizontal: 'large' }}>
          <Box direction='row-responsive'>
            <Box margin={{ vertical: 'large' }} basis='1/2' align='start' gap='small'>
              <Heading level={1}>
                <strong>{name}</strong>
              </Heading>
              {desc ? (
                // eslint-disable-next-line react/no-danger
                <p dangerouslySetInnerHTML={{ __html: desc.description }} />
              ) : null}
              <CodeSnippet
                onData={this.onData}
                formatSnippet={p => `return ${p}`}
                code={code}
                height='30px'
              />
            </Box>
            <Box flex={true} pad={{ vertical: 'large' }} align='center'>
              <Box basis='medium' pad='small'>
                {example ? example(rawdata) : <KDEChartArray
                  rawData={rawdata}
                  smoothing={smoothing}
                  style={style}
                  size={size}
                />
                }
              </Box>
            </Box>
          </Box>
        </Box>

        {desc ? (
          <Box pad={{ horizontal: 'large', bottom: 'large' }}>
            { desc.usage && (
              <Box pad='large' round='large' margin='small' background='light-2'>
                <Heading margin='none' level={3}><strong>Usage</strong></Heading>
                <Markdown>{desc.usage}</Markdown>
              </Box>
            )}
            <Box pad='large' round='large' background='light-1'>
              {desc.properties ? desc.properties.map(property => (
                <DocProperty
                  key={property.name}
                  property={property}
                  examples={examples[property.name]}
                />
              )) :
              <Text color='light-5'>No properties</Text>}
            </Box>
          </Box>
        ) : null}
        {children}
      </Layout>
    );
  }
}

Doc.propTypes = {
  desc: PropTypes.object,
  code: PropTypes.string.isRequired,
  examples: PropTypes.object,
  name: PropTypes.string.isRequired,
};

Doc.defaultProps = {
  desc: undefined,
  examples: {},
};
