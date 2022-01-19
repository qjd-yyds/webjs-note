import React from 'react';

const Document = ({ children, data }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ssr-demo</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: children }}></div>
        <script dangerouslySetInnerHTML={{ __html: `window.APP_DATA=${JSON.stringify(data)}` }}></script>
        <script defer src="/build/main.js"></script>
      </body>
      {/* 实现数据共享 */}
    </html>
  );
};

export default Document;
