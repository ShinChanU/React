import React, { useEffect } from 'react';

const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}  </b>
      <span>{user.email}</span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: 'ChanWoo',
      email: 'tlscksdn963@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};

export default UserList;