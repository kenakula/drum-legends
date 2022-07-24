import JustValidate from 'just-validate';
import Inputmask from 'inputmask';

const PHONE_MASK = '+7 (999) 999-99-99';

export const initContactForm = () => {
  const form = document.querySelector('#contact-form');
  const phoneInput = form.querySelector('input[type="tel"]');

  if (phoneInput) {
    Inputmask({ mask: PHONE_MASK, showMaskOnHover: false }).mask(phoneInput);
  }

  const successMessage = form.querySelector('[data-success]');

  const showSuccesMessage = () => {
    if (!successMessage) {
      return;
    }

    successMessage.classList.add('active');
  };

  if (!form) {
    return;
  }

  const validation = new JustValidate(form, {
    errorFieldCssClass: 'form__input--error',
    errorLabelCssClass: 'form__error-message',
    successFieldCssClass: 'form__input--success',
    errorLabelStyle: '',
    focusInvalidField: true,
  });
  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Это обязательное поле',
      },
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Это обязательное поле',
      },
      {
        validator: value => {
          const unmaskedValue = Inputmask.unmask(value, { mask: PHONE_MASK });

          return unmaskedValue && unmaskedValue.length === 10;
        },
        errorMessage: 'Введите корректный номер телефона',
      },
    ])
    .addField('#privacy', [
      {
        rule: 'required',
        errorMessage: 'Необходимо согласие',
      },
    ])
    .onSuccess(evt => {
      const data = new FormData(evt.target);

      for (let pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    });
};
