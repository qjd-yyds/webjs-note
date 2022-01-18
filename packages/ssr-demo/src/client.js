// 客户端渲染入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
const root = document.getElementById('root');
// // 复用服务端返回的东西,实现渲染优化
ReactDOM.hydrate(
  // BrowserRouter 不能放在app里 ，服务端不存在doucment
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  root
);
