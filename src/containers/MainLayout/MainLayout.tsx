import React from 'react';

import style from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  return (
    <div className={style.container}>
      <h2>Bu uygulama sadece mobile arayüzde desteklenmektedir</h2>
      <p>Lütfen mobil görünüme geçin</p>
    </div>
  );
};

export default MainLayout;
