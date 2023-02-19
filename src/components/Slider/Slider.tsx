import React from 'react';

import usePromotions from 'store/hooks/usePromotions';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import style from './Slider.module.scss';

import SliderItem from './components/SliderItem';

const Slider: React.FC = () => {
  const promotions = usePromotions();

  return (
    <div className={style.container}>
      <Swiper
        slidesPerView="auto"
        autoHeight
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={style.slider}
      >
        {promotions.map((promotion) => (
          <SwiperSlide key={promotion.Id}>
            <SliderItem data={promotion} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
