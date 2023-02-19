import React from 'react';

import useTimeAgo from 'hooks/useTimeAgo';

import style from './Image.module.scss';

type Props = {
  source: string;
  color: string;
  icon: string;
  name?: string;
  date?: string | null;
  radius?: number;
};

const Image: React.FC<Props> = ({ source, color, icon, radius = 100, name = null, date = null }) => {
  const formattedDate = (date && useTimeAgo(date)) || null;

  return (
    <div className={style.container}>
      <img
        className={style.image}
        src={source}
        alt={name || source}
        style={{
          borderBottomLeftRadius: radius,
        }}
      />

      {formattedDate && <div className={style.date}>{formattedDate}</div>}

      <div className={style.brandImage} style={{ backgroundColor: color }}>
        <img src={icon} alt={name || source} />
      </div>
    </div>
  );
};

export default Image;
