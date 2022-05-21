import React, { FC } from 'react';
import { IUsers } from '../../../interface/IUsers';
import style from '../userspage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[] | null;
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {usersDataAttr ? (
          usersDataAttr.map((user) => {
            // console.log(user);
            const { id, name, email } = user;
            return <UserCard key={id} name={name} email={email} />;
          })
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default UsersPageComponent;
