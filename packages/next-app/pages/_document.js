import Document, { Html, Head, Main, NextScript } from 'next/document';
import React, { Component } from 'react';

class MyDocument extends React.Component {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps
    };
  }
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
