import { initContactForm } from '../blocks/contact/contact';
import { initMainNav, initModals, initToggler } from '../components';
import { initForm, initPrivacyCheckbox } from '../components/form/form';
import { initPage } from './modules/init-page';
import { initSliders } from './modules/init-sliders';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initToggler();
  initScrollTo();
  initModals();
  initSliders();
  initMainNav();
  initForm();
  initContactForm();
  initPrivacyCheckbox();
});
