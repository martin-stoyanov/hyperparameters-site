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
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <link rel='shortcut icon' type='image/png' href='/static/img/hpjs.png' />
          <link rel='apple-touch-icon' sizes='196x196' type='image/png' href='/static/img/hpjs.png' />
        </Head>
        <body style={{ margin: 0, height: 'auto', minHeight: '100vh' }} >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
