import Swiper, { Navigation, Pagination } from 'swiper';
import {
  clearLegendsPosition,
  LEGENDS_SLIDER_OPTIONS,
  positionLegends,
} from '../../blocks/legends/legends';
import { TESTIMONIALS_SLIDER_OPTIONS } from '../../blocks/testimonials/testimonials';
import { debounce } from '../utils/debounce';

Swiper.use([Navigation, Pagination]);

export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-slider]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach(slider => {
    const sliderId = slider.id;

    if (!sliderId) {
      return;
    }

    let destroyBreakpoint = Boolean(slider.dataset.breakpoint)
      ? window.matchMedia(`(min-width: ${slider.dataset.breakpoint}px)`)
      : null;
    let breakpoints = Boolean(slider.dataset.breakpoints)
      ? JSON.parse(slider.dataset.breakpoints)
      : {};
    let options = { breakpoints };
    const sliderType = slider.dataset.sliderType;

    switch (sliderType) {
      case 'legends':
        options = { ...options, ...LEGENDS_SLIDER_OPTIONS };
        break;
      case 'testimonials':
        options = { ...options, ...TESTIMONIALS_SLIDER_OPTIONS };
        break;
      default:
        break;
    }

    let sliderInst = new Swiper(slider, options);

    if (!destroyBreakpoint) {
      return;
    }

    const onResize = () => {
      if (destroyBreakpoint.matches) {
        sliderInst.destroy(true, true);
        positionLegends(slider);
      } else {
        clearLegendsPosition(slider);
        sliderInst = new Swiper(slider, options);
      }
    };

    const resizeWatcher = debounce(onResize, 300);

    window.addEventListener('resize', resizeWatcher);
    // onResize();

    if (destroyBreakpoint.matches) {
      positionLegends(slider);
    }
  });
};
