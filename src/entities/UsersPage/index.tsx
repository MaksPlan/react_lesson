import React, { useEffect, useState } from 'react';
import { UserUrl } from '../../api/constants';
import { IUsers } from '../../interface/IUsers';
import UsersPageComponent from './Components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers[] | null>(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(UserUrl)
        .then((resolve) => resolve.json())
        .then((data) => setUsersData(data));
    }, 2000);
  }, []);

  console.log(usersData);
  return usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
