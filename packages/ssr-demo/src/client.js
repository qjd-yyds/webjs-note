// 客户端渲染入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
// 复用服务端返回的东西,实现渲染优化
ReactDOM.hydrate(<App></App>, root);
