import React from 'react';

import style from './DesktopLayout.module.scss';

const DesktopLayout: React.FC = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Bu uygulama sadece mobile arayüzde desteklenmektedir</h2>
      <p className={style.description}>Lütfen mobil görünüme geçin</p>
    </div>
  );
};

export default DesktopLayout;
