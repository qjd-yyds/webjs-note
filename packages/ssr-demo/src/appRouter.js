import express from 'express';
import ReactDomServer from 'react-dom/server';
import Document from './components/Document';
import App from './components/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';

const router = express.Router();

router.get('*', (req, res) => {
  const appString = ReactDomServer.renderToString(
    // 使用StaticRouter 无状态路由 解析服务端的路由
    <StaticRouter location={req.url}>
      <App></App>
    </StaticRouter>
  );
  // 渲染静态部分
  const html = ReactDomServer.renderToStaticMarkup(<Document>{appString}</Document>);
  res.send(html);
});

module.exports = router;
