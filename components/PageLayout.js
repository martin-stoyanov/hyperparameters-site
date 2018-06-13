import { Box } from 'grommet';
import Layout from './Layout';

export default class PageLayout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { title, description, children } = this.props;
    return (
      <Layout
        title={title}
        description={description}
      >
        <Box
          pad={{
          horizontal: 'large',
          top: 'large',
        }}
        >
          {children}
        </Box>
      </Layout>
    );
  }
}
