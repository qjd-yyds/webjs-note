import 'normalize.css';
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Meta from 'components/Common/Meta';
function MyApp({
  Component, // 当前匹配到路由
  pageProps // 当前已请求到数据
}) {
  return (
    <>
      <Meta></Meta>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
