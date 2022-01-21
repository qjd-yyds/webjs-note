import { useEffect } from 'react';

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_SERVER_HOST);
  useEffect(() => {
    fetch('http://localhost:3000/api/course', { method: 'POST' })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div>
      <h1>你好next</h1>
    </div>
  );
}
