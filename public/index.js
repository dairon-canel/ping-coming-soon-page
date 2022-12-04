const form = document.querySelector('form');
const email = document.getElementById('mail');
const error = email.nextElementSibling;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/* window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);

  if (isValid) {
    email.classList.remove('invalid-form');
    error.textContent = '';
    error.classList.add('hidden');
    return;
  }

  email.classList.add('invalid-form');
  error.textContent = 'listener load';
  error.classList.remove('hidden');
}); */

window.addEventListener('load', () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    const FD = new FormData(form);

    // Define what happens on successful data submission
    XHR.addEventListener('load', event => {
      alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener('error', event => {
      alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', './');

    // The data sent is what the user provided in the form
    XHR.send(FD);
  }

  // Get the form element
  const form = document.getElementById('email-form');

  // Add 'submit' event handler
  form.addEventListener('submit', event => {
    event.preventDefault();

    sendData();
  });
});

email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.classList.remove('invalid-form');
    error.textContent = '';
    error.classList.add('hidden');
    return;
  }

  email.classList.add('invalid-form');
  error.textContent = 'listener input';
  error.classList.remove('hidden');
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.classList.add('invalid-form');
    error.textContent = 'listener submit';
    error.classList.remove('hidden');
  } else {
    email.classList.remove('invalid-form');
    error.textContent = '';
    error.classList.add('hidden');
  }
});
