import React from 'react';

import Button from 'components/Button';

import style from './Account.module.scss';
import { IconUser } from 'assets/Icons';

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <Button type="primary" size="large">
        Giriş Yap
      </Button>

      <Button >
        <IconUser />
      </Button>
    </div>
  );
};

export default Header;
