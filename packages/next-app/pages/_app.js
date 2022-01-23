import '../styles/globals.css';
function MyApp({
  Component, // 当前匹配到路由
  pageProps // 当前已请求到数据
}) {
  return <Component {...pageProps} />;
}

export default MyApp;
