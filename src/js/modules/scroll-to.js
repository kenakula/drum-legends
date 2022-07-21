export const initScrollTo = () => {
  const anchors = document.querySelectorAll('[data-anchor]');

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
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  anchors.forEach(anchor => anchor.addEventListener('click', scrollToTarget));
};
