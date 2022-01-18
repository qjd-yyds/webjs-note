import express from 'express';
import ReactDomServer from 'react-dom/server';
import Document from './components/Document';
import App from './components/App';
import React from 'react';
const appString = ReactDomServer.renderToString(<App></App>);
// 渲染静态部分
const html = ReactDomServer.renderToStaticMarkup(<Document>{appString}</Document>);
const router = express.Router();

router.get('/', (req, res) => {
  res.send(html);
});

module.exports = router;
