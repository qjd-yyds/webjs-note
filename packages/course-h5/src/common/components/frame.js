/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';

const Frame = ({ children }) => {
  return (
    <>
      <header id="header">
        <nav className="menu"></nav>
        <h1 className="logo">bystander.com</h1>
        <a className="user" href="www.bystander.com"></a>
      </header>
      <nav id="menu">
        <Link to="/">首页</Link>
        <Link to="/work">课程安排</Link>
        <Link to="/lecturer">讲师团队</Link>
      </nav>
      <main id="main">{children}</main>
    </>
  );
};

export default Frame;
