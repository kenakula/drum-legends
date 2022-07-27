export const initPrivacyCheckbox = () => {
  const checkmark = document.querySelector('[data-checkmark]');
  const checkbox = document.querySelector('#privacy');

  if (!checkbox || !checkmark) {
    return;
  }

  checkbox.addEventListener('change', evt => {
    const checked = evt.target.checked;

    if (checked) {
      checkmark.classList.add('active');
    } else {
      checkmark.classList.remove('active');
    }
  });

  checkbox.checked = true;
  checkmark.classList.add('active');
};

export const initForm = () => {
  const forms = document.querySelectorAll('.contact__form');

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
