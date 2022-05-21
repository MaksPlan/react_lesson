import React, { FC } from 'react';
import style from '../userspage.module.scss';

interface IProps {
  key: number;
  name: string;
  email: string;
}

const UserCard: FC<IProps> = ({ key, name, email }) => {
  return (
    <div className={style.user_card} key={key}>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
