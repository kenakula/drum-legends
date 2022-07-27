import { Navigation, Pagination } from 'swiper';

export const TESTIMONIALS_SLIDER_OPTIONS = {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
    },
    1024: {
      spaceBetween: 80,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
};
