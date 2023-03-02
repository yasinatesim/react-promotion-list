import React from 'react';

import css from './Image.module.scss';

type Props = {
  source: string;
  color: string;
  icon: string;
  name?: string;
  date?: string | null;
  style?: any;
  isBackgroundImage?: boolean;
};

const Image: React.FC<Props> = ({
  source,
  color,
  icon,
  name = null,
  date = null,
  style,
  isBackgroundImage = false,
}) => {
  // const formattedDate = (date && useTimeAgo(date)) || null;
  const formattedDate = date || null;

  return (
    <div className={css.container}>
      {isBackgroundImage ? (
        <div className={css.fullImage} style={{ backgroundImage: `url(${source})`, ...style }} />
      ) : (
        <img
          className={css.image}
          src={source}
          alt={name || source}
          style={{
            ...style,
          }}
        />
      )}

      {formattedDate && <div className={css.date}>{formattedDate}</div>}

      <div className={css.brandImage} style={{ backgroundColor: color }}>
        <img src={icon} alt={name || source} />
      </div>
    </div>
  );
};

export default Image;
