import React from 'react';

import css from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={css.container} id="loader">
      <div className={css.spin} />
    </div>
  );
};

export default Loader;
