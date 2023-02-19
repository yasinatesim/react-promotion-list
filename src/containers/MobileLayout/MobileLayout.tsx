import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

import style from './MobileLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.content}>{children}</div>

      <Footer />
    </div>
  );
};

export default MobileLayout;
