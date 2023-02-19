import React from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/Image';

import { Promotion } from 'types/models';

import { useText } from 'hooks';

import css from './SliderItem.module.scss';

type Props = {
  data: Promotion;
};

const SliderItem: React.FC<Props> = ({ data }) => {
  const { handleFullFilledTitle } = useText();

  return (
    <Link to={`/campaign/${data.SeoName}/${data.Id}`} className={css.container}>
      <div className={css.sliderImageWrapper}>
        <Image
          source={data.ImageUrl}
          color={data.BrandIconColor}
          icon={data.BrandIconUrl}
          name={data.SeoName}
          date={data.RemainingText}
          style={{
            borderRadius: 20,
            borderBottomLeftRadius: 80,
          }}
          isBackgroundImage={!handleFullFilledTitle(data.Title)}
        />
      </div>

      {handleFullFilledTitle(data.Title) && (
        <div className={css.title} dangerouslySetInnerHTML={{ __html: data.Title }} />
      )}

      <div className={css.slideCardColor} style={{ backgroundColor: data.PromotionCardColor }} />

      {handleFullFilledTitle(data.Title) && (
        <div
          className={css.promotionText}
          dangerouslySetInnerHTML={{ __html: data.BrandPromotionCardParticipationText }}
        />
      )}
    </Link>
  );
};

export default SliderItem;
