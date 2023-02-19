import React from 'react';

import Header from 'components/Header';

import style from './MobileLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />

      {children}
    </div>
  );
};

export default MobileLayout;
