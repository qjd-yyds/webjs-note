import Index from '../views/index';
import Login from '../views/login';
import Lecturer from '../views/lecturer';
import Work from '../views/work';
import Course from '../views/course';
const routes = [
  {
    name: '首页',
    path: '/',
    render() {
      return <Index ></Index>;
    }
  },
  {
    name: '登陆页',
    path: '/login',
    render() {
      return <Login></Login>;
    }
  },
  {
    name: '讲师团队',
    path: '/lecturer',
    render() {
      return <Lecturer></Lecturer>;
    }
  },
  {
    name: '作品详情',
    path: '/work',
    render() {
      return <Work></Work>;
    }
  },
  {
    name: '课程',
    path: '/course',
    render() {
      return <Course></Course>;
    }
  }
];

export default routes;
