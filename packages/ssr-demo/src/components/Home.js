import React, { useContext } from 'react';
import { fetchHome } from '../core/api';
import useData from '../core/useData';
import Context from './propsContext';
function Home() {
  const { staticContext } = useContext(Context);
  const [data, setData] = useData(staticContext, { title: '', desc: '' }, fetchHome);
  return (
    <main>
      <h1>Home</h1>
      <p>{data.title}</p>
      <p>{data.desc}</p>
    </main>
  );
}
Home.getData = fetchHome;
export default Home;
