import React from 'react';

import Button from 'components/Button';

import { Detail } from 'types/models';

import css from './DetailLayout.module.scss';

type Props = {
  children: React.ReactNode;
  pageDetails: Detail;
};

const DetailLayout: React.FC<Props> = ({ pageDetails, children }) => {
  return (
    <div className={css.container}>
      {children}

      <div className={css.footer}>
        <Button width="100%" size="large">
          {pageDetails.DetailButtonText}
        </Button>
      </div>
    </div>
  );
};

export default DetailLayout;
