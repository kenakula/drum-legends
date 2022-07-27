import { Pagination } from 'swiper';

export const LEGENDS_SLIDER_OPTIONS = {
  modules: [Pagination],
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 20,
};

export const positionLegends = container => {
  const list = container.querySelector('[data-legends-list]');

  if (!list) {
    return;
  }

  const items = list.querySelectorAll('[data-legends-item]');
  const itemsCount = items.length;
  const listWidth = list.dataset.diameter;

  if (!itemsCount) {
    return;
  }

  list.style = `width: ${listWidth}px; height: ${listWidth}px;`;

  let angle = 360 / itemsCount;
  let rotation = 0;

  for (let i = 0; i < itemsCount; i++) {
    items[i].style = `transform: rotate(${rotation * 1}deg) translate(${
      listWidth / 2
    }px) rotate(${rotation * -1}deg) translate(-50%, -50%)`;

    rotation += angle;
  }
};

export const clearLegendsPosition = container => {
  const list = container.querySelector('[data-legends-list]');

  if (!list) {
    return;
  }

  list.style = '';

  const items = list.querySelectorAll('[data-legends-item]');
  const itemsCount = items.length;

  if (!itemsCount) {
    return;
  }

  items.forEach(item => (item.style = ''));
};
