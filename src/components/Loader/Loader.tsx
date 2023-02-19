import React from 'react';

import style from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={style.container} id="loader">
      <div className={style.spin} />
    </div>
  );
};

export default Loader;
