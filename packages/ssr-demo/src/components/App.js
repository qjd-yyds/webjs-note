import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import routes from '../core/routes';
export default function App() {
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
          return <Route key={item.path} path={item.path} element={<item.component />}></Route>;
        })}
      </Routes>
    </div>
  );
}
