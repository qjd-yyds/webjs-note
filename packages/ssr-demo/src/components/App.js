import React, { useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import routes from '../core/routes';
import Home from './Home';
import NotFound from './NotFound';
import User from './User';
export default function App() {
  // 测试证明 服务端没有打印，浏览器端打印
  // useEffect(() => {
  //   console.log('app mounted');
  // }, []);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
        <li>
          <Link to="/asds">不存在的页面</Link>
        </li>
      </ul>
      <Routes>
        {routes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              exact={item.path === '/'}
              element={<item.component></item.component>}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}
