import { IconUser } from 'assets/Icons';
import React from 'react';

import { useDispatch } from 'react-redux';
import { handleCloseModal, handleOpenModal } from 'store/reducers/modal';

import Button from 'components/Button';

import { MODAL_LOGIN } from 'components/Modal/constants';

import css from './Account.module.scss';

const Account: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <Button type="primary" onClick={() => dispatch(handleOpenModal(MODAL_LOGIN) as any)}>
        Giriş Yap
      </Button>

      <Button
        classnames={{
          container: css.user,
        }}
        type="secondary"
        shape="circle"
        onClick={() => dispatch(handleCloseModal() as any)}
      >
        <IconUser />
      </Button>
    </div>
  );
};

export default Account;
