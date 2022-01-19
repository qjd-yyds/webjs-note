import Home from '../components/Home';
import NotFound from '../components/NotFound';
import User from '../components/User';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
