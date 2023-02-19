import { handleFullFilledTitle } from 'helpers/text';
import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/Image';

import { Promotion } from 'types/models';

import style from './SliderItem.module.scss';

type Props = {
  data: Promotion;
};

const SliderItem: React.FC<Props> = ({ data }) => {
  return (
    <Link to={`/campaign/${data.SeoName}/${data.Id}`} className={style.container}>
      <div className={style.sliderImageWrapper}>
        {handleFullFilledTitle(data.Title) ? (
          <Image
            source={data.ImageUrl}
            color={data.BrandIconColor}
            icon={data.BrandIconUrl}
            name={data.SeoName}
            date={data.RemainingText}
            radius={80}
          />
        ) : (
          <div className={style.fullImage} style={{ backgroundImage: `url(${data.ImageUrl})` }} />
        )}
      </div>

      {handleFullFilledTitle(data.Title) && (
        <div className={style.title} dangerouslySetInnerHTML={{ __html: data.Title }} />
      )}

      <div className={style.slideCardColor} style={{ backgroundColor: data.PromotionCardColor }} />

      {handleFullFilledTitle(data.Title) && (
        <div
          className={style.promotionText}
          dangerouslySetInnerHTML={{ __html: data.BrandPromotionCardParticipationText }}
        />
      )}
    </Link>
  );
};

export default SliderItem;
