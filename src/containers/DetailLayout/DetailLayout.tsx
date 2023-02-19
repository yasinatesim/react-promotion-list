import React from 'react';

import Button from 'components/Button';

import style from './DetailLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

const DetailLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={style.container}>
      {children}

      <div className={style.footer}>
        <Button width="100%">Hemen Katıl</Button>
      </div>
    </div>
  );
};

export default DetailLayout;
