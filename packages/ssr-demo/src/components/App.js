import React, { useEffect } from 'react';

export default function App() {
  // 测试证明 服务端没有打印，浏览器端打印
  useEffect(() => {
    console.log('app mounted');
  }, []);
  return (
    <h1
      onClick={() => {
        alert(1);
      }}
    >
      hello 我这里是客户端渲染
    </h1>
  );
}
