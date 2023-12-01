import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { User } from '../../interfaces/user-interface';
import { RootState } from '../../interfaces/root-state';
import UserGridCard from '../atoms/user-grid-card';
import UserListItem from '../atoms/user-ilist-tems';

export default function UserBoard({
  usersData,
}: {
  usersData: User[];
}): JSX.Element {
  const view: 'list' | 'grid' = useSelector((state: RootState) => state.view);

  return (
    <main className="max-w-[calc(100%-40px)] xxl:max-w-[1360px] mx-auto">
      <ul
        className={cn(
          'w-full',
          view === 'list'
            ? 'flex flex-col items-start'
            : 'grid grid-cols-1 md:grid-cols-2 l:grid-cols-3 items-center justify-center gap-[10px]',
        )}
      >
        {usersData.length > 0 &&
          usersData.map(userData => (
            <>
              {view === 'grid' ? (
                <UserGridCard key={userData.id} userData={userData} />
              ) : (
                <UserListItem key={userData.id} userData={userData} />
              )}
            </>
          ))}
      </ul>
    </main>
  );
}
