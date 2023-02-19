import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

import Loader from 'components/Loader';

import css from './MobileLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={css.container}>
      <Loader />

      <Header />

      <div className={css.content}>{children}</div>

      <Footer />
    </div>
  );
};

export default MobileLayout;
