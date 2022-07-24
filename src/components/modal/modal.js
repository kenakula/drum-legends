export const initModals = () => {
  const modals = document.querySelectorAll('[data-modal]');

  if (!modals.length) {
    return;
  }

  const myModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
    waitTransitions: true,
  });
};
