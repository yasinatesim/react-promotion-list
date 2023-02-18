import React from 'react';

import { IconUser } from 'assets/Icons';

import Button from 'components/Button';

import style from './Account.module.scss';

const Account: React.FC = () => {
  return (
    <div className={style.container}>
      <Button type="primary">
        Giriş Yap
      </Button>

      <Button
        classnames={{
          container: style.user,
        }}
        type="secondary"
        shape='circle'
      >
        <IconUser />
      </Button>
    </div>
  );
};

export default Account;
