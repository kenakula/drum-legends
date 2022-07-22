import { initLegendsSlider } from '../blocks/legends/legends';
import { initTestimonialsSlider } from '../blocks/testimonials/testimonials';
import { initModals, initToggler } from '../components';
import { initPage } from './modules/init-page';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initToggler();
  initScrollTo();
  initModals();
  initTestimonialsSlider();
  initLegendsSlider();
});
