import { Route, Routes } from 'react-router-dom';
import routes from './routes';
function IndexRoute() {
  return (
    <Routes>
      {routes.map((item) => {
        return <Route key={item.path} path={item.path} element={item.render()}></Route>;
      })}
    </Routes>
  );
}

export default IndexRoute;
