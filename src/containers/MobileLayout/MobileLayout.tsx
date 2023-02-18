import React from 'react';

import Header from 'components/Header';

type Props = {
  children: React.ReactNode;
};

const MobileLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
};

export default MobileLayout;
