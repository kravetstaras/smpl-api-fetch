import React, { useEffect, useState } from 'react';
import fetchFromApi from './utils/fetchFromApi';
import { User } from './interfaces/user-interface';

import UserBoard from './components/organisms/users-board';
import Header from './components/molecules/header';

function App() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data && <UserBoard usersData={data} />}
    </>
  );
}

export default App;
