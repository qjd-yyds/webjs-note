import React from 'react';

export default function User() {
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
