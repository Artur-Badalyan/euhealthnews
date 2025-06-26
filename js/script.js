document.addEventListener('DOMContentLoaded', function () {
  (() => {
    const dateElements = document.querySelectorAll(".womanCom__date");

    dateElements.forEach((el, index) => {
      const now = new Date();
      now.setDate(now.getDate() - index + 1);
      const dateStr = `${now.getDate().toString().padStart(2, "0")}.${(now.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${now.getFullYear()}`;
      el.textContent = dateStr;
    });

    const CONFIG = {
      MAX_NAME_LEN: 255,
      MIN_NAME_LEN: 1,
      MAX_PHONE_LEN: 14,
      MIN_PHONE_LEN: 9,
      MESSAGES: {
        NAME_HINT: "Unesite svoje ime",
        PHONE_HINT: "Unesite vaš telefonski broj",
        WRONG_NAME: "Provjerite jeste li unijeli točan naziv",
        WRONG_PHONE: "Provjerite jeste li unijeli točan telefonski broj"
      },
      FORBIDDEN_SYMBOLS: /['"#&\-\\@!~`|\/^({;:]/g,
      PERMITTED_PHONE_SYMBOLS: /[^+0-9]/g,
      USER_HINT_MESSAGE_ID: 'msg_for_user_in_form'
    };

    document.querySelectorAll('form').forEach(function (form, i) {
      const prepareNameField = form.querySelector("input[name='name']");
      const preparePhoneField = form.querySelector("input[name='phone']");
      if (!prepareNameField || !preparePhoneField) return;

      prepareNameField.type = 'text';
      prepareNameField.maxLength = CONFIG.MAX_NAME_LEN;
      prepareNameField.minLength = CONFIG.MIN_NAME_LEN;
      prepareNameField.autocomplete = 'off';

      preparePhoneField.type = 'tel';
      preparePhoneField.maxLength = CONFIG.MAX_PHONE_LEN;
      preparePhoneField.minLength = CONFIG.MIN_PHONE_LEN;
      preparePhoneField.autocomplete = 'off';

      prepareNameField.addEventListener('input', () => {
        prepareNameField.value = prepareNameField.value.replace(CONFIG.FORBIDDEN_SYMBOLS, '');
      })
      prepareNameField.addEventListener('focus', () => {
        clearMessages();
        showMessage(prepareNameField, CONFIG.MESSAGES.NAME_HINT)
      })
      prepareNameField.addEventListener('focusout', clearMessages);


      preparePhoneField.addEventListener('input', () => {
        preparePhoneField.value = preparePhoneField.value.replace(CONFIG.PERMITTED_PHONE_SYMBOLS, '')
      })
      preparePhoneField.addEventListener('focus', () => {
        clearMessages();
        showMessage(preparePhoneField, CONFIG.MESSAGES.PHONE_HINT)
      })
      preparePhoneField.addEventListener('focusout', clearMessages);

      form.addEventListener('submit', e => {
        e.preventDefault();
        clearMessages();

        const validName = validateName(prepareNameField.value);
        const validPhone = validatePhone(preparePhoneField.value);

        if (!validName) return showMessage(prepareNameField, CONFIG.MESSAGES.WRONG_NAME);
        if (!validPhone) return showMessage(preparePhoneField, CONFIG.MESSAGES.WRONG_PHONE);

        prepareNameField.value = validName;
        preparePhoneField.value = validPhone;
        ym(103039703, 'reachGoal', 'order_submit', {
          name: validName,
          phone: validPhone
        });
        form.submit();
      });
    })

    function clearMessages() {
      document.querySelectorAll(`#${CONFIG.USER_HINT_MESSAGE_ID}`).forEach(element => element.remove());
    }

    function validateName(name) {
      const cleanedName = name.trim().replace(CONFIG.FORBIDDEN_SYMBOLS, '');
      return (cleanedName.length >= CONFIG.MIN_NAME_LEN && cleanedName.length <= CONFIG.MAX_NAME_LEN) ? cleanedName : false;
    }

    function validatePhone(phoneNumber) {
      const cleanedPhone = phoneNumber.trim().replace(CONFIG.PERMITTED_PHONE_SYMBOLS, '')
      return cleanedPhone.length >= CONFIG.MIN_PHONE_LEN && cleanedPhone.length <= CONFIG.MAX_PHONE_LEN ? cleanedPhone : false;
    }

    function showMessage(elem, message) {
      clearMessages();
      const appender = document.createElement('div');
      appender.textContent = message;
      appender.id = CONFIG.USER_HINT_MESSAGE_ID;
      appender.style = `
        background: #e74c3c;
        color: #fff;
        font-family: Arial;
        font-size: 14px;
        border: 1px dashed black;
        border-radius: 4px;
        padding: 6px 10px;
        position: absolute;
        top: ${elem.offsetTop - 36}px;
        left: ${elem.offsetLeft}px;
        z-index: 9999;
      `;
      elem.before(appender)
    }
  })();
});