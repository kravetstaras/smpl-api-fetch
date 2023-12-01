import React, { useEffect, useState } from 'react';
import fetchFromApi from './utils/fetchFromApi';
import { User } from './interfaces/user-interface';

import UserBoard from './components/users-board';

function App() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromApi();
      setData(data);
    };

    fetchData();
  }, []);

  return <div className="">{data && <UserBoard usersData={data} />}</div>;
}

export default App;
