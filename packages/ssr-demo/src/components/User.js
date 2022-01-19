import React from 'react';
import { fetchUser } from '../core/api';
function User() {
  return (
    <main>
      <h1>User</h1>
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
