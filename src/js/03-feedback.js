import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextAreaInput, 500));

populateFormOutput();

function onTextAreaInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (formRef.email.value && formRef.message.value === '') {
    alert('Кроме тебя поля никто не заполнит(((');
  }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function populateFormOutput() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formRef.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    formRef.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
}
