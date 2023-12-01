import React from 'react';
import { User } from '../interfaces/user-interface';
import UserCard from './user-card';

export default function UserBoard({
  usersData,
}: {
  usersData: User[];
}): JSX.Element {
  return (
    <main className="">
      {usersData.length > 0 &&
        usersData.map(userData => (
          <UserCard key={userData.id} userData={userData} />
        ))}
    </main>
  );
}
