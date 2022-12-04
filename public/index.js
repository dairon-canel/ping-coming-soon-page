const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = email.nextElementSibling;

const emailRegExp =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const setError = errorString => {
  email.classList.add('invalid-form');
  error.textContent = errorString;
  error.classList.remove('hidden');
};

const setValidate = () => {
  email.classList.remove('invalid-form');
  error.textContent = '';
  error.classList.add('hidden');
};

const validate = () => {
  setValidate();
  window.alert(email.value);
  email.value = '';
};

email.addEventListener('focus', event => {
  setValidate();
});

email.addEventListener('blur', event => {
  setValidate();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  let errorMessage = '';

  if (email.value.length === 0) {
    errorMessage = 'Whoops! It looks like you forgot to add your email';
    setError(errorMessage);
    return;
  }

  if (!emailRegExp.test(email.value)) {
    errorMessage = 'Please provide a valid email address';
    setError(errorMessage);
    return;
  }

  validate();
});
