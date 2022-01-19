import React, { useEffect, useState } from 'react';
import { fetchHome } from '../core/api';
function Home({ staticContext }) {
  console.log('staticContext==>', staticContext);
  const getinitdata = () => {
    if (staticContext) {
      // 服务端执行
      return staticContext;
    }
    console.log(window);
    // if (window && window.APP_DATA) {
    //   // 客户端执行
    //   return JSON.parse(window.APP_DATA);
    // }
    return {};
  };
  const [home, sethome] = useState(getinitdata());
  useEffect(() => {
    // 防止客户端跳转数据污染
    if (window.APP_DATA) {
      // 首屏渲染，清空
      window.APP_DATA = undefined;
    }
    // spa render
    fetchHome().then()
  });
  return (
    <main>
      <h1>Home</h1>
      <p>{home.title}</p>
      <p>{home.desc}</p>
    </main>
  );
}
Home.getData = fetchHome;
export default Home;
