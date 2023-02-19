import React from 'react';
import { Link } from 'react-router-dom';

import usePromotions from 'store/hooks/usePromotions';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import useCardTitle from 'hooks/useCardTitle';

import style from './Slider.module.scss';

const Slider: React.FC = () => {
  const promotions = usePromotions();

  const { handleFullFilledTitle } = useCardTitle();

  return (
    <div className={style.container}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={style.slider}
      >
        {promotions.map((promotion) => (
          <SwiperSlide key={promotion.Id}>
            <Link to={`/campaign/${promotion.SeoName}/${promotion.Id}`} className={style.sliderItem}>
              <div className={style.sliderImageWrapper}>
                {handleFullFilledTitle(promotion.Title) ? (
                  <img src={promotion.ImageUrl} alt={promotion.SeoName} className={style.slideImage} />
                ) : (
                  <div className={style.fullImage} style={{ backgroundImage: `url(${promotion.ImageUrl})` }} />
                )}
              </div>

              {handleFullFilledTitle(promotion.Title) && (
                <div className={style.title} dangerouslySetInnerHTML={{ __html: promotion.Title }} />
              )}

              <div className={style.slideCardColor} style={{ backgroundColor: promotion.PromotionCardColor }} />

              {handleFullFilledTitle(promotion.Title) && (
                <div
                  className={style.promotionText}
                  dangerouslySetInnerHTML={{ __html: promotion.BrandPromotionCardParticipationText }}
                />
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
