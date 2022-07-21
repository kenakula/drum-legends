import { debounce } from '../../js/utils/debounce';

const SWITCHABLE_TOGGLER_CLASS = 'toggler--close';
const RESIZE_DEBOUNCE_TIME = 300;

export const initToggler = () => {
  const togglers = document.querySelectorAll('[data-toggler]');

  const toggleTargetItem = evt => {
    const target = evt.target.closest('[data-toggler]');

    if (!target) {
      return;
    }

    const targetId = target.dataset.targetId;
    const className = target.dataset.targetClassToggle;

    const targetEl = document.querySelector(`.${targetId}`);

    if (!targetEl) {
      return;
    }

    const watchResize = debounce(() => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
        target.classList.remove(SWITCHABLE_TOGGLER_CLASS);
        targetEl.classList.remove(className);
        window.removeEventListener('resize', watchResize);
      }
    }, RESIZE_DEBOUNCE_TIME);

    const toggleClasses = (el, switchableClass) => {
      const isToggled = el.classList.contains(switchableClass);

      if (isToggled) {
        el.classList.remove(switchableClass);
        target.classList.remove(SWITCHABLE_TOGGLER_CLASS);

        return;
      }

      el.classList.add(switchableClass);
      target.classList.add(SWITCHABLE_TOGGLER_CLASS);
      window.addEventListener('resize', watchResize);
    };

    toggleClasses(targetEl, className, target);
  };

  togglers.forEach(toggler => {
    toggler.addEventListener('click', toggleTargetItem);
  });
};
