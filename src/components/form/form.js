export const initForm = () => {
  const forms = document.querySelectorAll('[data-form]');

  if (!forms.length) {
    return;
  }

  const closeSuccessMessage = formEl => {
    const successMessage = formEl.querySelector('[data-success]');

    if (!successMessage) {
      return;
    }

    successMessage.classList.remove('active');
  };

  forms.forEach(form => {
    const closeSuccessBtn = form.querySelector('[data-close]');

    if (closeSuccessBtn) {
      closeSuccessBtn.addEventListener('click', evt => {
        const target = evt.target.closest('[data-close]');

        if (!target) {
          return;
        }

        closeSuccessMessage(form);
      });
    }
  });
};
