import React, { useEffect } from 'react';

import usePromotions from 'store/hooks/usePromotions';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import style from './Slider.module.scss';

import SliderItem from './components/SliderItem';

const Slider: React.FC = () => {
  const promotions = usePromotions();

  const handleChangePaginationColor = ({ activeIndex }: { activeIndex: number }) => {
    const pagination = document.querySelectorAll('.swiper-pagination-bullet') as NodeListOf<HTMLElement>;
    const paginationActive = document.querySelector('.swiper-pagination-bullet-active') as HTMLElement;
    if (pagination) {
      pagination.forEach((item) => {
        if (item.getAttribute('style')) {
          item.removeAttribute('style');
        }
      });
    }

    if (paginationActive) {
      paginationActive.style.backgroundColor = promotions[activeIndex].PromotionCardColor;
    }
  };

  useEffect(() => {
    if (promotions.length) {
      handleChangePaginationColor({ activeIndex: 0 });
    }
  }, [promotions]);

  return (
    <div className={style.container}>
      <Swiper
        slidesPerView="auto"
        autoHeight
        centeredSlides
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={style.slider}
        onSlideChange={(swiper) => {
          handleChangePaginationColor({ activeIndex: swiper.activeIndex });
        }}
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
