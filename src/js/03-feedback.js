// import throttle from 'lodash.throttle';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   email: document.querySelector('input'),
// };
// refs.form.addEventListener('input', throttle(onInputForm, 500));
// refs.form.addEventListener('submit', onFormSubmit);
// onSavedTextareaInput();
// function onInputForm() {
//   const objCurrentForm = {};
//   objCurrentForm.email = refs.email.value;
//   objCurrentForm.message = refs.textarea.value;
//   localStorage.setItem('feedbackFormState', JSON.stringify(objCurrentForm));
// }
// function onFormSubmit(e) {
//   e.preventDefault();
//   const {
//     elements: { email, message },
//   } = e.currentTarget;
//   if (email.value === '' || message.value === '') {
//     return;
//   }
//   const dataObject = {
//     email: email.value,
//     message: message.value,
//   };
//   console.log(dataObject);
//   e.currentTarget.reset();
//   localStorage.removeItem('feedbackFormState');
// }
// function onSavedTextareaInput() {
//   const savedMessage = JSON.parse(localStorage.getItem('feedbackFormState'));
//   if (localStorage.getItem('feedbackFormState')) {
//     refs.email.value = savedMessage.email;
//     refs.textarea.value = savedMessage.message;
//   }
// }

// import throttle from 'lodash.throttle';

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   email: document.querySelector('.feedback-form input'),
// };
// console.dir(refs.textarea);
// console.dir(refs.email);
// refs.form.addEventListener('input', throttle(onInputForm, 500));
// refs.form.addEventListener('submit', onFormSubmit);

// const feedbackFormState = localStorage.getItem('feedbackFormState')
//   ? JSON.parse(localStorage.getItem('feedbackFormState'))
//   : {};
// onSavedTextareaInput();

// function onInputForm(e) {
//   feedbackFormState[e.target.name] = e.target.value;
//   console.log(feedbackFormState);
//   localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem('feedbackFormState');
// }

// function onSavedTextareaInput(e) {
//   if (!localStorage.getItem('feedbackFormState')) {
//     return;
//   }
//   const savedMessage = JSON.parse(localStorage.getItem('feedbackFormState'));
//   console.log(typeof savedMessage);

//   if (savedMessage) {
//     if (savedMessage.email) {
//       refs.email.value = savedMessage.email;
//     }

//     if (savedMessage.message) {
//       refs.textarea.value = savedMessage.message;
//     }
//   }
// }

import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
};
const STORAGE_KEY = 'feedbackFormState';

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

onSavedTextareaInput();

function onFormSubmit(e) {
  e.preventDefault();

  const email = refs.form.elements.email.value;
  const message = refs.form.elements.message.value;

  if (!email || !message) return alert('?????? ???????? ???????????? ???????? ??????????????????');

  console.log({ email, message });

  refs.form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputForm(e) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (e.target.name === 'email') {
    data.email = e.target.value;
  } else if (e.target.name === 'message') {
    data.message = e.target.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onSavedTextareaInput(e) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    refs.form.elements.email.value = data.email || '';
    refs.form.elements.message.value = data.message || '';
  }
}
