import React from 'react';
import ItemsList from '../ItemsList';
import style from './MainPage.module.scss';
import MainLayout from '../../shared/layouts/mainlayout';

const MainPage = () => {
  return (
    <MainLayout>
      <div className={style.page_wrapper}>
        <ItemsList />
      </div>
    </MainLayout>
  );
};

export default MainPage;
