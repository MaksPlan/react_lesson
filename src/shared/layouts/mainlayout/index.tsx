import React, { FC } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import style from './mainlout.module.scss';

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.content_wrapper}>{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
