import cls from 'styles/layout.module.css';
const Layout = ({ children }) => {
  return (
    <main className={cls.container}>
      <header>头部</header>
      <section>{children}</section>
      <footer>底部</footer>
    </main>
  );
};

export default Layout;
