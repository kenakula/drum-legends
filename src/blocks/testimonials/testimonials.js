import Swiper from 'swiper/bundle';

export const initTestimonialsSlider = () => {
  const testimonialsSlider = document.querySelector(
    '[data-slider-testimonials]',
  );

  if (!testimonialsSlider) {
    return;
  }

  const testimonialsSliderInst = new Swiper(testimonialsSlider, {
    pagination: {
      el: '.testimonials__pagination',
      type: 'bullets',
      clickable: true,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '#button-next',
      prevEl: '#button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
      1024: {
        spaceBetween: 80,
      },
      1280: {
        spaceBetween: 120,
      },
      1440: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },
    },
  });
};
