import React from 'react';

import css from './DesktopLayout.module.scss';

const DesktopLayout: React.FC = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Bu uygulama sadece mobile arayüzde desteklenmektedir</h2>
      <p className={css.description}>Lütfen mobil görünüme geçin</p>
    </div>
  );
};

export default DesktopLayout;
