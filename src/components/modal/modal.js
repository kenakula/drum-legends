export const initModals = () => {
  const body = document.querySelector('body');
  const header = body.querySelector('[data-header]');
  const modals = document.querySelectorAll('[data-modal]');

  if (!modals.length) {
    return;
  }

  const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';

    body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
  };

  const disableScrolling = () => {
    const scrollWidth = getScrollbarWidth();
    header.setAttribute('style', `padding-right: ${scrollWidth}px;`);
  };

  const enableScrolling = () => {
    header.removeAttribute('style');
  };

  const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
    waitTransitions: true,
    beforeOpen: () => disableScrolling(),
    afterClose: () => enableScrolling(),
  });
};
