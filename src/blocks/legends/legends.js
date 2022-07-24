import Swiper from 'swiper/bundle';
import { debounce } from '../../js/utils/debounce';

export const initLegendsSlider = () => {
  const legendsSlider = document.querySelector('[data-slider-legends]');

  if (!legendsSlider) {
    return;
  }

  const options = {
    pagination: {
      el: '.legends__pagination',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
  };

  let legendsSliderInst = new Swiper(legendsSlider, options);
  const noSliderBreakpoint = window.matchMedia('(min-width: 1024px)');

  const resizeWatcher = debounce(() => {
    noSliderBreakpoint.matches
      ? legendsSliderInst.destroy(true, true)
      : (legendsSliderInst = new Swiper(legendsSlider, options));
  }, 300);

  window.addEventListener('resize', resizeWatcher);
  document.addEventListener('DOMContentLoaded', () => {
    noSliderBreakpoint.matches
      ? legendsSliderInst.destroy(true, true)
      : (legendsSliderInst = new Swiper(legendsSlider, options));
  });
};
