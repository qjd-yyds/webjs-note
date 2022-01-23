import Layout from 'components/Layout';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
function MyApp({
  Component, // 当前匹配到路由
  pageProps // 当前已请求到数据
}) {
  const [state, setstate] = useState(0);
  return (
    <Layout>
      <Component {...pageProps} {...{ state, setstate }} />
    </Layout>
  );
}

export default MyApp;
