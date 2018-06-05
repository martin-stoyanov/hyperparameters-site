import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang='en-US'>
        <Head>
          {this.props.styleTags}
          <title>HyperSearch: Hyperparameter Optimization for Javascript</title>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='description' content='HyperSearch is a Javascript library for hyperparameter optimization. It is based on the Python library Hyperopt ' />
        </Head>
        <body style={{ margin: 0, height: 'auto', minHeight: '100vh' }} >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
