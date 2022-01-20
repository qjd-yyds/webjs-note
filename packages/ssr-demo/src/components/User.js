import React, { useContext } from 'react';
import { fetchUser } from '../core/api';
import useData from '../core/useData';
import Context from './propsContext';
function User() {
  const { staticContext } = useContext(Context);
  const [data, setData] = useData(
    staticContext,
    {
      name: '',
      age: 0,
      id: ''
    },
    fetchUser
  );
  return (
    <main>
      <h1>User</h1>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.id}</p>
      <button
        onClick={() => {
          alert('user!');
        }}
      >
        click
      </button>
    </main>
  );
}
User.getData = fetchUser;

export default User;
