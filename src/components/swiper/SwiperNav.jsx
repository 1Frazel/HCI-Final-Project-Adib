import React from 'react';
import './swiper-nav.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function SwiperNav({ onPrev, onNext, className = '', ...props }) {
  const rootClassName = ['swiper-nav', className].filter(Boolean).join(' ');

  return (
    <div className={rootClassName} {...props}>
      <button
        className="swiper-nav__button swiper-nav__button--prev"
        onClick={onPrev}
        aria-label="Previous slide"
        type="button"
      >
        <FaArrowAltCircleLeft />
      </button>
      <button
        className="swiper-nav__button swiper-nav__button--next"
        onClick={onNext}
        aria-label="Next slide"
        type="button"
      >
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
}

export default SwiperNav;
