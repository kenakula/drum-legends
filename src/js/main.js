import { initContactForm } from '../blocks/contact/contact';
import { initLegendsSlider } from '../blocks/legends/legends';
import { initTestimonialsSlider } from '../blocks/testimonials/testimonials';
import { initModals, initToggler } from '../components';
import { initForm } from '../components/form/form';
import { initPage } from './modules/init-page';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initToggler();
  initScrollTo();
  initModals();
  initTestimonialsSlider();
  initLegendsSlider();
  initForm();
  initContactForm();
});
