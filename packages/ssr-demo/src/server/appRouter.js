import express from 'express';
import ReactDomServer from 'react-dom/server';
import Document from '../components/Document';
import App from '../components/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import routes from '../core/routes';
import { matchPath } from 'react-router-dom';
import Context from '../components/propsContext';
const router = express.Router();
router.get('*', async (req, res) => {
  let data = {};
  let getData = null;
  routes.some((item) => {
    const match = matchPath(req.path, item.path);
    if (match) {
      getData = (item.component || {}).getData;
    }
    return match; // 终止遍历
  });
  try {
    if (typeof getData === 'function') {
      data = await getData();
      // APP_DATA = data;
    }
  } catch (error) {
    console.log(error);
  }
  // 组件渲染
  const appString = ReactDomServer.renderToString(
    // 使用StaticRouter 无状态路由 解析服务端的路由
    <Context.Provider value={{ staticContext: data }}>
      <StaticRouter location={req.url}>
        <App></App>
      </StaticRouter>
    </Context.Provider>
  );
  // 渲染静态部分
  const html = ReactDomServer.renderToStaticMarkup(<Document data={data}>{appString}</Document>);
  res.send(html);
});

module.exports = router;
