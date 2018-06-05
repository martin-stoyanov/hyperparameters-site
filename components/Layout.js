import React from 'react';
import { Grommet } from 'grommet';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children, description }) => (
  <Grommet>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </Grommet>
);

export default Layout;
