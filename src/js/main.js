import { initToggler } from '../components/toggler/toggler';
import { initPage } from './modules/init-page';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initToggler();
});
