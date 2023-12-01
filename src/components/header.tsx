import React from 'react';
import { User } from '../interfaces/user-interface';

export default function UserBoard({
  usersData,
}: {
  usersData: User[];
}): JSX.Element {
  return (
    <header className="h-[120px] pt-[30px] l:pt-0 l:h-[80px] top-0 w-full bg-white mx-auto"></header>
  );
}
