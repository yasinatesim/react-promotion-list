import React from 'react';

import { Detail } from 'types/models';

import useTimeAgo from 'hooks/useTimeAgo';

import style from './Image.module.scss';

type Props = {
  data: Detail;
};

const Image: React.FC<Props> = ({ data }) => {
  const date = useTimeAgo(data.EndDate);

  return (
    <div className={style.container}>
      <img className={style.image} src={data.ImageUrl} alt={data.SeoName} />

      <div className={style.date}>{date}</div>

      <div className={style.brandImage} style={{ backgroundColor: data.BrandIconColor }}>
        <img src={data.BrandIconUrl} alt={data.SeoName} />
      </div>
    </div>
  );
};

export default Image;
