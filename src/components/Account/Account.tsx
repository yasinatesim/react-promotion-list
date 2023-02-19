import { IconUser } from 'assets/Icons';
import React from 'react';

import Button from 'components/Button';

import css from './Account.module.scss';

const Account: React.FC = () => {
  return (
    <div className={css.container}>
      <Button type="primary">Giriş Yap</Button>

      <Button
        classnames={{
          container: css.user,
        }}
        type="secondary"
        shape="circle"
      >
        <IconUser />
      </Button>
    </div>
  );
};

export default Account;
