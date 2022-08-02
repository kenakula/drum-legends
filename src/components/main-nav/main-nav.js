export const initMainNav = () => {
  const mainNav = document.querySelector('#main-nav');
  const links = document.querySelectorAll('a[data-target-id]');

  if (!links.length) {
    return;
  }

  const options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.5,
  };

  const turnLinkActive = el => {
    if (el) {
      links.forEach(link => link.classList.remove('active'));

      el.classList.add('active');
    }
  };

  const callback = function (entries) {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      const link = mainNav.querySelector(`[data-target-id="${sectionId}"]`);

      if (link) {
        if (entry.isIntersecting) {
          turnLinkActive(link);
        } else {
          link.classList.remove('active');
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('section[id]');

  if (!targets.length) {
    return;
  }

  targets.forEach(target => {
    observer.observe(target);
  });
};
