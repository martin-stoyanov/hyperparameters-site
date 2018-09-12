import React from 'react';
import { Grommet, Box } from 'grommet';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import theme from './utils/theme';
import { initGA, logPageView } from './utils/analytics';

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const {
      title,
      children,
      description = 'hpjs is a Javascript library for hyperparameter optimization. It is based on the Python library Hyperopt ',
    } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <title>hpjs: Hyperparameter Optimization for Javascript</title>
          <meta name='description' content={description} />
        </Head>
        <Grommet theme={theme}>
          <Header />
          <Box pad={{ vertical: 'large' }}>
            {children}
          </Box>
          <Footer />
        </Grommet>
      </React.Fragment>
    );
  }
}
export default Layout;
