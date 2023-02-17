import React from 'react';

import { Logo } from 'assets/Icons';

import style from './Header.module.scss';
import Account from 'components/Account';

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo />

      <div>
        <Account />
      </div>
    </div>
  );
};

export default Header;
