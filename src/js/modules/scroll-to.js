export const initScrollTo = () => {
  const anchors = document.querySelectorAll('[data-anchor]');
  const HEADER_OFFSET = 80;

  if (!anchors.length) {
    return;
  }

  const scrollToTarget = evt => {
    evt.preventDefault();

    const target = evt.target.closest('[data-anchor]');

    if (!target) {
      return;
    }

    const targetId = target.dataset.targetId;
    const el = document.getElementById(targetId);

    if (el) {
      const yPos =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

      window.scrollTo({ top: yPos, behavior: 'smooth' });
    }
  };

  anchors.forEach(anchor => anchor.addEventListener('click', scrollToTarget));
};
