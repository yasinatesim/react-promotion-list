import React from 'react';

import Header from 'components/Header';

type Props = {
  children: React.ReactNode;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default MobileLayout;
