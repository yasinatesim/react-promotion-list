import { ImageLogo as Logo } from 'assets/Images';
import React from 'react';

import Account from 'components/Account';

import style from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo />

      <div className={style.account}>
        <Account />
      </div>
    </div>
  );
};

export default Header;
