import { useEffect } from 'react';

export default function Home({ state, setstate }) {
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
      <span>{state}</span>
      <button onClick={() => setstate(++state)}>+1</button>
    </div>
  );
}
