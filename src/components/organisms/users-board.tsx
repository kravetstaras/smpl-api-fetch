import React, { Fragment } from 'react';
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
  const search: string = useSelector((state: RootState) => state.search);

  const filteredBySearch = usersData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

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
        {filteredBySearch.length > 0 &&
          filteredBySearch.map((userData, index) => (
            <Fragment key={userData.id}>
              {view === 'grid' ? (
                <UserGridCard userData={userData} />
              ) : (
                <UserListItem userData={userData} index={index + 1} />
              )}
            </Fragment>
          ))}
      </ul>
    </main>
  );
}
