import { initToggler } from '../components/toggler/toggler';
import { initPage } from './modules/init-page';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initToggler();
  initScrollTo();
});
