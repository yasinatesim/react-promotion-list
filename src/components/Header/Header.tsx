import { ImageLogo as Logo } from 'assets/Images';
import React from 'react';

import Account from 'components/Account';

import css from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={css.container}>
      <Logo />

      <div className={css.account}>
        <Account />
      </div>
    </div>
  );
};

export default Header;
