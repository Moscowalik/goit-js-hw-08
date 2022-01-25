import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

populateFormOutput();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
}

function onTextAreaInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormOutput() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formRef.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    formRef.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
}
