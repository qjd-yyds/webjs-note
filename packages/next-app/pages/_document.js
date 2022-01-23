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
        <Head>
          {/* 禁止iphone点击数字自动拨号 */}
          <meta name="format-detection" content="telephone=no"></meta>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
          {/* 网站描述信息 */}
          <meta name="keywords" content="网易,网易公开课"></meta>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
