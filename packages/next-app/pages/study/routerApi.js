import router from 'next/router';
import { useEffect } from 'react';

const routerapi = () => {
  const handler = () => {
    router.push({
      pathname: '/book/one/123',
      query: {
        year: 2000
      }
    });
  };
  // useEffect(() => {
  //   router.beforePopState(({ url }) => {
  //     return true;
  //   });
  // }, []);
  return (
    <ul>
      <li>
        <button onClick={() => router.push('/book')}>js跳转book</button>
      </li>
      <li>
        <button onClick={() => router.push('/book/one/[id]', '/book/one/123')}>动态路由</button>
      </li>
      <li>
        <button onClick={handler}>对象跳转路由</button>
      </li>
    </ul>
  );
};

export default routerapi;
