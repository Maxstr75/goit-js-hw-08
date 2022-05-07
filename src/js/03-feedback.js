import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('feedback-form input')
};
console.dir(refs.textarea);
console.dir(refs.email);
refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

const feedbackFormState = localStorage.getItem('feedbackFormState') ? JSON.parse(localStorage.getItem('feedbackFormState')) : {};

// onSavedTextareaInput();

function onInputForm(e) {
    feedbackFormState[e.target.name] = e.target.value;
    console.log(feedbackFormState);
  localStorage.setItem('feedbackFormState', JSON.stringify(feedbackFormState));
};

function onFormSubmit(e) {
//   console.log(JSON.parse(localStorage.getItem('feedbackFormStat')));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedbackFormState');
};

function onSavedTextareaInput(e) {
    if (!localStorage.getItem('feedbackFormState')) {
        return;
    }
    const savedMessage = JSON.parse(localStorage.getItem('feedbackFormState'));
    console.log(typeof savedMessage);

    if (savedMessage) {
        if (savedMessage.email) {
            refs.email.value = savedMessage.email;
        };
        
        if (savedMessage.message) {
            refs.textarea.value = savedMessage.message; 
        };
    }
};

// (function dataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('feedback-form-state'));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// })();
