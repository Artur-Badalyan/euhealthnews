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



    // Last script

    // const MAX_NAME_LEN = "255";
    // const MIN_NAME_LEN = "1";
    // const MIN_PHONE_LEN = '9';
    // const MAX_PHONE_LEN = '14';

    // const MESSAGES = {
    //   NAME_HINT: "Unesite svoje ime",
    //   PHONE_HINT: "Unesite vaš telefonski broj",
    //   WRONG_NAME: "Provjerite jeste li unijeli točan naziv",
    //   WRONG_PHONE: "Provjerite jeste li unijeli točan telefonski broj"
    // }

    // const USER_HINT_MESSAGE_ID = 'msg_for_user_in_form'
    // const FORBIDDEN_SYMBOLS = ['\'', '"', '#', '&', '-', '\\', '@', '!', '~', '`', '|', '/', '^', '(', '{', ';', ':'];
    // const PERMITTED_PHONE_SYMBOLS = /[^+0-9]/gi;


    // document.querySelectorAll('form').forEach(function (form, i) {
    //   if (!form.querySelector("input[name='name']") || !form.querySelector("input[name='phone']")) return;

    //   const prepareNameField = form.querySelector("input[name='name']");
    //   const preparePhoneField = form.querySelector("input[name='phone']");

    //   prepareNameField.type = 'text';
    //   prepareNameField.maxLength = MAX_NAME_LEN;
    //   prepareNameField.minLength = MIN_NAME_LEN;
    //   prepareNameField.autocomplete = 'off';

    //   preparePhoneField.type = 'tel';
    //   preparePhoneField.maxLength = MAX_PHONE_LEN;
    //   preparePhoneField.minLength = MIN_PHONE_LEN;
    //   preparePhoneField.autocomplete = 'off';

    //   prepareNameField.addEventListener('input', function (e) {
    //     if (FORBIDDEN_SYMBOLS.includes(e.data)) {
    //       prepareNameField.value = prepareNameField.value.replace(e.data, '')
    //     }
    //   })
    //   prepareNameField.addEventListener('focus', function (e) {
    //     showMessage(prepareNameField, MESSAGES.NAME_HINT)
    //   })
    //   prepareNameField.addEventListener('focusout', function (e) {
    //     clearMessages(USER_HINT_MESSAGE_ID)
    //   })


    //   preparePhoneField.addEventListener('input', function (e) {
    //     preparePhoneField.value = preparePhoneField.value.replace(PERMITTED_PHONE_SYMBOLS, '')
    //   })
    //   preparePhoneField.addEventListener('focus', function (e) {
    //     clearMessages(USER_HINT_MESSAGE_ID)
    //     showMessage(preparePhoneField, MESSAGES.PHONE_HINT)
    //   })
    //   preparePhoneField.addEventListener('focusout', function (e) {
    //     clearMessages(USER_HINT_MESSAGE_ID)
    //   })
    //   form.addEventListener('submit', function (e) {
    //     e.preventDefault()
    //     handleForm(this)
    //   })
    // })

    // function handleForm(form) {
    //   const NAME_FIELD = form.querySelector("input[name='name']")
    //   const PHONE_FIELD = form.querySelector("input[name='phone']")
    //   const VALID_NAME = validateName(NAME_FIELD.value)
    //   const VALID_PHONE = validatePhone(PHONE_FIELD.value)
    //   clearMessages(USER_HINT_MESSAGE_ID)
    //   if (false === VALID_NAME) {
    //     showMessage(NAME_FIELD, MESSAGES.WRONG_NAME)
    //     return false;
    //   }
    //   if (false === VALID_PHONE) {
    //     showMessage(PHONE_FIELD, MESSAGES.WRONG_PHONE)
    //     return false
    //   }
    //   if (false !== VALID_PHONE && false !== VALID_NAME) {
    //     form.querySelector("input[name='name']").value = VALID_NAME
    //     form.querySelector("input[name='phone']").value = VALID_PHONE
    //     form.submit()
    //   }
    // }

    // function clearMessages(id) {
    //   const ELEMENT_PHONE_MESSAGE_ON_PAGE = document.querySelectorAll('#' + id)
    //   if (ELEMENT_PHONE_MESSAGE_ON_PAGE !== undefined) {
    //     ELEMENT_PHONE_MESSAGE_ON_PAGE.forEach(function (element, i) {
    //       element.remove()
    //     })
    //   }
    // }

    // function validateName(name) {
    //   FORBIDDEN_SYMBOLS.forEach(function (symbol, i) {
    //     name = name.replace(symbol);
    //   })
    //   return (name.length >= MIN_NAME_LEN && name.length <= MAX_NAME_LEN) ? name : false
    // }

    // function validatePhone(phoneNumber) {
    //   let phone = phoneNumber.trim();
    //   if (!phone) return false;

    //   phone = phone.replace(/[^+0-9]/gi, '')
    //   if (phone.length >= MIN_PHONE_LEN && phone.length <= MAX_PHONE_LEN) {
    //     return phone;
    //   }
    //   return false;
    // }

    // function showMessage(elem, message) {
    //   if (elem.classList.contains('js_errorMessage') !== undefined) {
    //     elem.classList.remove('js_errorMessage')
    //   }
    //   const newOffsetTop = elem.offsetTop - 36 + 'px'
    //   const newOffsetLeft = elem.offsetLeft + 'px'
    //   const appender = document.createElement('div')
    //   appender.style.backgroundColor = '#e74c3c'
    //   appender.style.border = '1px dashed black'
    //   appender.style.borderRadius = '5px'
    //   appender.style.color = '#fff'
    //   appender.style.fontFamily = 'Arial'
    //   appender.style.fontSize = '16px'
    //   appender.style.margin = '3px 0 0 0px'
    //   appender.style.padding = '6px 5px 5px'
    //   appender.style.position = 'absolute'
    //   appender.style.zIndex = '9999'
    //   appender.style.top = newOffsetTop
    //   appender.style.left = newOffsetLeft
    //   appender.textContent = message
    //   appender.id = USER_HINT_MESSAGE_ID
    //   elem.before(appender)
    // }
  })();
});